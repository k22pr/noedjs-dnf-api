import type * as model from "../model";
import type { BaseParams } from "./params";
import { Request, UriBuilder } from "./query";

/**
 * API 요청을 생성하는 헬퍼 함수
 * @param baseParts URI 경로 세그먼트들
 * @param params 요청 파라미터
 * @returns API 응답 Promise
 */
export function createRequest<T>(
  baseParts: (string | number)[],
  params?: BaseParams,
): Promise<model.IDnfResponse<T>> {
  return Request<T>({
    base: UriBuilder(...baseParts),
    params,
  });
}
