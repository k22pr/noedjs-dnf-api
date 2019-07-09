import axios, { AxiosResponse } from "axios";
import querystring from "querystring";
import urlencode from "urlencode";
import consola from "consola";

import * as Util from "./";
type DnfErrorResponse = {
  url: string;
  status: number;
  statusText: string;
  code: string;
  message: string;
};
type DnfResponse = {
  data?: any;
  error?: DnfErrorResponse;
};

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

  /**
   *  던전앤파이터 API 서버에 응답을 요청하는 함수 입니다.
   * 해당 함수를 직접 호출 하는것을 권장하지 않습니다.
   *
   * @param {object} opt (요청을 보낼 Parameter값)
   * @returns
   */
  public static async Request(opt: any = {}, method: string = "GET"): Promise<DnfResponse> {
    if (!Util.Config.key || Util.Config.key == "") {
      consola.error("Please change to your api key. ");
      // return null;
      // return console.error("\x1b[31mPlease change to your api key. \n", "\x1b[33min setConfigs({key:YOURKEY})\x1b[0m");
    }

    if (opt.params == undefined) opt.params = {};
    opt.params.apikey = Util.Config.key;
    opt.url = `${opt.base}?${querystring.stringify(opt.params)}`;

    let responseData: DnfResponse;
    switch (method.toLowerCase()) {
      case "post":
        responseData = await sender
          .post(opt.url)
          .then((res) => {
            return { data: res.data };
          })
          .catch((err) => {
            let error: DnfErrorResponse = {
              url: showUrl(opt.url),
              status: err.status,
              statusText: err.response.statusText,
              code: err.response.data.error.code,
              message: err.response.data.error.message,
            };
            return { error };
          });
        break;
      case "get":
      default:
        responseData = await sender
          .get(opt.url)
          .then((res) => {
            return { data: res.data };
          })
          .catch((err) => {
            let error: DnfErrorResponse = {
              url: showUrl(opt.url),
              status: err.response.status,
              statusText: err.response.statusText,
              code: err.response.data.error.code,
              message: err.response.data.error.message,
            };
            return { error };
          });
        break;
    }

    //  console.log(responseData);
    //  if (Util.Config.returnJSON) rsp = JSON.stringify(rsp);
    return responseData;

    //  let dnfResonse  : DnfResponse
    //  let responseData: AxiosResponse<any> = sender.get(opt.url);

    //  let rsp: any = sender
    //    .get(opt.url)
    //    .then((res) => {
    //      return {
    //        data: Util.Config.responeHeader
    //          ? {
    //              status: res.status,
    //              statusText: res.statusText,
    //              headers: res.headers,
    //              body: res.data,
    //            }
    //          : res.data,
    //      };
    //    })
    //    .catch((err) => {
    //      if (Util.Config.hideOnErrorApiKey) err.response.data.url = err.response.config.url.replace(Util.Config.key, Util.Config.hidekeyText);
    //      else err.response.data.url = err.response.config.url;
    //      return (rsp = {
    //        err: Util.Config.responeHeader
    //          ? {
    //              status: err.response.status,
    //              statusText: err.response.statusText,
    //              headers: err.response.headers,
    //              body: err.response.data,
    //            }
    //          : err.response.data,
    //      });
    //      //   console.log("\x1b[31m[DNF_API] RequestError\x1b[0m :", err.response.data.url.replace(Util.Config.hidekeyText, `\x1b[33m${Util.Config.hidekeyText}\x1b[0m`));
    //    });
    //  //convert JSON
    //  if (Util.Config.returnJSON) rsp = JSON.stringify(rsp);
    //  return rsp;
  }

  public static makeItemQuery(query: any) {
    //  return JSON.stringify(query).replace(/\"|\{|\}/gi, "");
    return query.urlencode;
  }
}
