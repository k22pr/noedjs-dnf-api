import axios from "axios";
import querystring from "querystring";
import consola from "consola";

import * as Util from "./";

const sender = axios.create({
  baseURL: "https://api.neople.co.kr",
  timeout: Util.Option.axiosTimeout,
});

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
  public static Request(opt: any = {}) {
    if (!Util.Option.key || Util.Option.key == "") {
      return consola.error("Please change to your api key. ");
      // return console.error("\x1b[31mPlease change to your api key. \n", "\x1b[33min setOptions({key:YOURKEY})\x1b[0m");
    }

    if (opt.params == undefined) opt.params = {};
    opt.params.apikey = Util.Option.key;
    opt.url = `${opt.base}?${querystring.stringify(opt.params)}`;

    let rsp: any = sender
      .get(opt.url)
      .then((res) => {
        return {
          data: Util.Option.responeHeader
            ? {
                status: res.status,
                statusText: res.statusText,
                headers: res.headers,
                body: res.data,
              }
            : res.data,
        };
      })
      .catch((err) => {
        if (Util.Option.hideOnErrorApiKey) err.response.data.url = err.response.config.url.replace(Util.Option.key, Util.Option.hidekeyText);
        else err.response.data.url = err.response.config.url;
        return (rsp = {
          err: Util.Option.responeHeader
            ? {
                status: err.response.status,
                statusText: err.response.statusText,
                headers: err.response.headers,
                body: err.response.data,
              }
            : err.response.data,
        });
        //   console.log("\x1b[31m[DNF_API] RequestError\x1b[0m :", err.response.data.url.replace(Util.Option.hidekeyText, `\x1b[33m${Util.Option.hidekeyText}\x1b[0m`));
      });
    //convert JSON
    if (Util.Option.returnJSON) rsp = JSON.stringify(rsp);
    return rsp;
  }

  public static makeItemQuery(query: any) {
    return JSON.stringify(query).replace(/\"|\{|\}/gi, "");
  }
}
