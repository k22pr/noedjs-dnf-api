import index from ".";
//const index = require(".").default;

import axios from "axios";
import querystring from "querystring";

/**
 *  던전앤파이터 API 서버에 응답을 요청하는 함수 입니다.
 * 해당 함수를 직접 호출 하는것을 권장하지 않습니다.
 *
 * @param {object} opt (요청을 보낼 Parameter값)
 * @returns
 */
function request(opt) {
  if (index.opt.key === "") {
    return console.error("\x1b[31mPlease change to your api key. \n", "\x1b[33min ./config/config.auth.js\x1b[0m");
  }

  var instance = axios.create({
    baseURL: "https://api.neople.co.kr",
    timeout: index.opt.requestTimeout
  });
  if (opt.params == undefined) opt.params = {};
  opt.params.apikey = index.opt.key;
  opt.url = `${opt.base}?${querystring.stringify(opt.params)}`;

  let rsp = instance
    .get(opt.url)
    .then(res => {
      return (rsp = index.opt.responeHeader
        ? {
            status: res.status,
            statusText: res.statusText,
            headers: res.headers,
            body: res.data
          }
        : res.data);
    })
    .catch(err => {
      if (index.opt.hideOnErrorApiKey) err.response.data.url = err.response.config.url.replace(index.opt.key, index.opt.hidekeyText);
      else err.response.data.url = err.response.config.url;
      return (rsp = {
        err: index.opt.responeHeader
          ? {
              status: err.response.status,
              statusText: err.response.statusText,
              headers: err.response.headers,
              body: err.response.data
            }
          : err.response.data
      });
      console.log("\x1b[31m[DNF_API] RequestError\x1b[0m :", err.response.data.url.replace(index.opt.hidekeyText, `\x1b[33m${index.opt.hidekeyText}\x1b[0m`));
    });

  //convert JSON
  if (index.opt.returnJSON) rsp = JSON.stringify(rsp);
  return rsp;
}

export default request;
