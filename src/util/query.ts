import consola from "consola";

import type * as model from "../model";
import * as Util from "./";
import type { BaseParams } from "./params";
import { requestQueue } from "./queue";

// 요청 옵션 인터페이스
export interface RequestOptions {
  base: string;
  params?: BaseParams;
  url?: string;
}

const API_BASE_URL = "https://api.neople.co.kr";

// 파라미터를 URLSearchParams로 변환 (중첩 객체는 JSON으로 직렬화)
const toSearchParams = (params: BaseParams): URLSearchParams => {
  const entries: [string, string][] = [];
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    if (typeof value === "object" && !Array.isArray(value)) {
      entries.push([key, JSON.stringify(value)]);
    } else if (Array.isArray(value)) {
      entries.push([key, value.join(",")]);
    } else {
      entries.push([key, String(value)]);
    }
  }
  return new URLSearchParams(entries);
};

// HTTP 요청 전송 함수
const sender = async <T>(
  path: string,
  method: "GET" | "POST",
  query: BaseParams,
): Promise<{
  ok: boolean;
  status: number;
  data: T | model.IDnfResponse<T>;
}> => {
  const url = new URL(path, API_BASE_URL);
  url.search = toSearchParams(query).toString();

  const res = await fetch(url.toString(), { method });
  const data = (await res.json()) as T | model.IDnfResponse<T>;

  return {
    ok: res.ok,
    status: res.status,
    data,
  };
};

// URL에서 API 키 숨김 처리
const showUrl = (url: string): string => {
  if (Util.config.key) {
    return url?.replace(Util.config.key, Util.config.hideKeyText);
  }
  return url;
};

/**
 * URI 경로를 빌드합니다.
 * @param args 경로 세그먼트들
 * @returns 결합된 URI 경로
 */
export function UriBuilder(...args: (string | number)[]): string {
  return args.join("/");
}

/**
 * 쿼리 문자열을 빌드합니다.
 * @param query 쿼리 배열
 * @returns 쿼리 문자열
 */
export function QueryBuilder(query: (string | number)[]): string {
  const qString: string[] = [];
  for (const key in query) {
    qString.push(`${key}:${query[key]},`);
  }
  return qString.join(",");
}

/**
 * 던전앤파이터 API 서버에 요청을 보내는 함수입니다.
 * @param opt 요청 옵션
 * @param method HTTP 메서드
 * @returns API 응답
 */
export async function Request<T>(
  opt: RequestOptions = { base: "" },
  method: "GET" | "POST" = "GET",
): Promise<model.IDnfResponse<T>> {
  if (!Util.config.key) {
    throw new Error(
      "API key is required. Set config.key before making requests.",
    );
  }

  const params: BaseParams = opt.params ?? {};

  if (params.q && Array.isArray(params.q)) {
    params.q = QueryBuilder(params.q as (string | number)[]);
  }

  params.apikey = Util.config.key;

  if (Util.config.showURL) {
    consola.log(
      "request url:",
      showUrl(`${opt.base}?${toSearchParams(params)}`),
    );
  }

  const res = await requestQueue.add(() => sender<T>(opt.base, method, params));

  if (!res.ok) {
    const resBody = res.data as model.IDnfResponse<T>;
    const error: model.IDnfErrorResponse = {
      url: showUrl(opt.url ?? ""),
      status: res.status || 0,
      statusText: "",
      code: resBody.error?.code || "",
      message: resBody.error?.message || "",
    };
    return { error };
  }

  return { data: res.data as T };
}

/**
 * 아이템 쿼리를 생성합니다.
 * @param query 쿼리 문자열
 * @returns 인코딩된 쿼리
 */
export function makeItemQuery(query: string): string {
  return encodeURI(query);
}

// 기존 호환성을 위한 default export
export default { UriBuilder, QueryBuilder, Request, makeItemQuery };
