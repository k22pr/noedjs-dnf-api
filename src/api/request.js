import axios from "axios";
import querystring from "querystring";

import auth from "../config/config.auth";
import config from "../config/config";

/**
 *  던전앤파이터 API 서버에 응답을 요청하는 함수 입니다.
 * 해당 함수를 직접 호출 하는것을 권장하지 않습니다.
 *
 * @param {object} opt (요청을 보낼 Parameter값)
 * @returns
 */
async function request(opt) {
  var instance = axios.create({
    baseURL: "https://api.neople.co.kr",
    timeout: config.requestTimeout
  });
  if (opt.params == undefined) opt.params = {};
  opt.params.apikey = auth.APIKey;
  opt.url = `${opt.base}?${querystring.stringify(opt.params)}`;

  let rsp = {};
  await instance
    .get(opt.url)
    .then(res => {
      rsp = config.responeHeader
        ? {
            status: res.status,
            statusText: res.statusText,
            headers: res.headers,
            body: res.data
          }
        : res.data;
    })
    .catch(err => {
      if (config.hideOnErrorApiKey) err.response.data.url = err.response.config.url.replace(auth.APIKey, config.hidekeyText);
      else err.response.data.url = err.response.config.url;
      rsp = {
        err: config.responeHeader
          ? {
              status: err.response.status,
              statusText: err.response.statusText,
              headers: err.response.headers,
              body: err.response.data
            }
          : err.response.data
      };
      console.log("\x1b[31m[DNF_API] RequestError\x1b[0m :", err.response.data.url.replace(config.hidekeyText, `\x1b[33m${config.hidekeyText}\x1b[0m`));
    });

  //convert JSON
  if (config.returnJSON) rsp = JSON.stringify(rsp);

  return await rsp;
}

export default request;
