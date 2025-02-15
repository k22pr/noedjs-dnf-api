import consola from "consola";
import querystring from "query-string";
import { Client, request } from "undici";

import type * as Model from "../model";
import * as Util from "./";

const apiUrl = new URL("https://api.neople.co.kr");
// const client = new Client("https://api.neople.co.kr", {
//   connectTimeout: Util.Config.timeout,
//   // allowH2: true,
// });

const sender = async <T>(path: string, method: "GET" | "POST", query: any) => {
  // const res = await client.request<Model.DnfResponse<T>>({
  // const res = await client.request<T>({
  //   path,
  //   method,
  //   query,
  // });
  apiUrl.pathname = path;
  apiUrl.search = querystring.stringify(query);

  const res = await request<Model.DnfResponse<T>>(apiUrl.href, {
    method,
  });
  return res;
};
const showUrl = (url: string): string => {
  if (Util.Config.key) {
    return url.replace(Util.Config.key, Util.Config.hideKeyText);
  } else {
    return url;
  }
};

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export default class Request {
  public static UriBuilder(...args: any[]): string {
    return args.join("/");
  }
  public static QueryBuilder(query: any): string {
    const qString: string[] = [];
    for (const key in query) {
      qString.push(`${key}:${query[key]},`);
    }
    return qString.join(",");
  }

  /**
   *  던전앤파이터 API 서버에 응답을 요청하는 함수 입니다.
   * 해당 함수를 직접 호출 하는것을 권장하지 않습니다.
   *
   * @param {object} opt (요청을 보낼 Parameter값)
   * @returns
   */
  public static async Request<T>(
    opt: any = {},
    method: "GET" | "POST" = "GET",
  ): Promise<Model.DnfResponse<T>> {
    if (!Util.Config.key || Util.Config.key === "") {
      consola.error("Please change to your api key. ");
    }

    if (opt.params === undefined) opt.params = {};
    if (opt.params.q) opt.params.q = Request.QueryBuilder(opt.params.q);

    opt.params.apikey = Util.Config.key;

    if (Util.Config.showURL)
      consola.log(
        "request url:",
        showUrl(`${opt.base}?${querystring.stringify(opt.params)}`),
      );

    const res = await sender<Model.DnfResponse<T>>(
      opt.base,
      method,
      opt.params,
    );
    if (res.statusCode !== 200) {
      const resBody = (await res.body.json()) as Model.DnfResponse<T>;
      const error: Model.DnfErrorResponse = {
        url: showUrl(opt.url),
        status: res.statusCode || 0,
        statusText: "",
        code: resBody.error?.code || "",
        message: resBody.error?.message || "",
      };
      return { error };
    } else {
      const resBody = (await res.body.json()) as Model.DnfResponse<T>;
      return resBody;
    }
  }

  public static makeItemQuery(query: any) {
    //  return JSON.stringify(query).replace(/\"|\{|\}/gi, "");
    return encodeURI(query);
  }
}
