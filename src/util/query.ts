import axios, { AxiosResponse } from "axios";
import querystring from "querystring";
// import urlencode from "urlencode";
// import consola from "consola";
const consola = require("consola");

import * as Util from "./";
import * as Model from "../model";

const sender = axios.create({
  baseURL: "https://api.neople.co.kr",
  timeout: Util.Config.axiosTimeout,
});
const showUrl = (url: string): string => {
  return url.replace(Util.Config.key, Util.Config.hidekeyText);
};

export default class Request {
  public static UriBuilder(...args: any[]): string {
    return args.join("/");
  }
  public static queryBuilder(query: any): string {
    let qString: string[] = [];
    for (let key in query) {
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
  public static async Request<T>(opt: any = {}, method: string = "GET"): Promise<Model.DnfResponse<T>> {
    if (!Util.Config.key || Util.Config.key == "") {
      consola.error("Please change to your api key. ");
    }

    if (opt.params == undefined) opt.params = {};
    if (opt.params.q) opt.params.q = this.queryBuilder(opt.params.q);

    opt.params.apikey = Util.Config.key;
    opt.url = `${opt.base}?${querystring.stringify(opt.params)}`;

    if (Util.Config.showURL) console.log(showUrl(opt.url));

    let responseData: Model.DnfResponse<T>;
    switch (method.toLowerCase()) {
      case "post":
        responseData = await sender
          .post(opt.url)
          .then((res: any) => {
            let data: T;
            if (res.data.rows) data = res.data.rows;
            else data = res.data;
            return { data };
          })
          .catch((err: any) => {
            if (err.response) {
              let error: Model.DnfErrorResponse = {
                url: showUrl(opt.url),
                status: err.response.status || 0,
                statusText: err.response.statusText,
                code: err.response.data.error.code,
                message: err.response.data.error.message,
              };
              return { error };
            } else {
              return { err: err };
            }
          });
        break;
      case "get":
      default:
        responseData = await sender
          .get(opt.url)
          .then((res: any) => {
            let data: T;
            if (res.data.rows) data = res.data.rows;
            else data = res.data;
            return { data };
          })
          .catch((err: any) => {
            if (err.response) {
              let error: Model.DnfErrorResponse = {
                url: showUrl(opt.url),
                status: err.response.status || 0,
                statusText: err.response.statusText,
                code: err.response.data.error.code,
                message: err.response.data.error.message,
              };
              return { error };
            } else {
              return { err: err };
            }
          });
        break;
    }
    return responseData;
  }

  public static makeItemQuery(query: any) {
    //  return JSON.stringify(query).replace(/\"|\{|\}/gi, "");
    return encodeURI(query);
  }
}
