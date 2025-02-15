import querystring from "querystring";
import consola from "consola";
// import axios, { AxiosResponse } from "axios";
import { Client, request } from "undici";
import { BaseUri } from "./static";

import type * as Model from "../model";
import * as Util from "./";

const client = new Client("https://api.neople.co.kr", {
  connectTimeout: Util.Config.timeout,
  allowH2: true,
});

const sender = async <T>(
  path: string,
  method: "GET" | "POST",
  query: Record<string, any>,
) => {
  const res = await client.request<Model.DnfResponse<T>>({
    path,
    method,
    query,
  });
  return res;
};
const showUrl = (url: string): string => {
  return url.replace(Util.Config.key, Util.Config.hideKeyText);
};

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export default class Request {
  public static UriBuilder(...args: any[]): string {
    return args.join("/");
  }
  public static queryBuilder(query: any): string {
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
    if (opt.params.q) opt.params.q = Request.queryBuilder(opt.params.q);

    opt.params.apikey = Util.Config.key;
    opt.url = `${opt.base}?${querystring.stringify(opt.params)}`;

    if (Util.Config.showURL) console.log(showUrl(opt.url));

    const res = await sender<T>(opt.url, method, opt.params.q);
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
      return { data: resBody.data };
    }

    // switch (method.toUpperCase()) {
    //   case "POST":
    // responseData = await sender
    //   .post(opt.url)
    //   .then((res: any) => {
    //     let data: T;
    //     if (res.data.rows) data = res.data.rows;
    //     else data = res.data;
    //     return { data };
    //   })
    //   .catch((err: any) => {
    //     if (err.response) {
    //       const error: Model.DnfErrorResponse = {
    //         url: showUrl(opt.url),
    //         status: err.response.status || 0,
    //         statusText: err.response.statusText,
    //         code: err.response.data.error.code,
    //         message: err.response.data.error.message,
    //       };
    //       return { error };
    //     }
    //     return { err: err };
    //   });
    // break;
    //   // case "GET":
    //   default:
    //     responseData = await sender
    //       .get(opt.url)
    //       .then((res: any) => {
    //         let data: T;
    //         if (res.data.rows) data = res.data.rows;
    //         else data = res.data;
    //         return { data };
    //       })
    //       .catch((err: any) => {
    //         if (err.response) {
    //           const error: Model.DnfErrorResponse = {
    //             url: showUrl(opt.url),
    //             status: err.response.status || 0,
    //             statusText: err.response.statusText,
    //             code: err.response.data.error.code,
    //             message: err.response.data.error.message,
    //           };
    //           return { error };
    //         }
    //         return { err: err };
    //       });
    //     break;
    // }
  }

  public static makeItemQuery(query: any) {
    //  return JSON.stringify(query).replace(/\"|\{|\}/gi, "");
    return encodeURI(query);
  }
}
