"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("."));

var _axios = _interopRequireDefault(require("axios"));

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const index = require(".").default;

/**
 *  던전앤파이터 API 서버에 응답을 요청하는 함수 입니다.
 * 해당 함수를 직접 호출 하는것을 권장하지 않습니다.
 *
 * @param {object} opt (요청을 보낼 Parameter값)
 * @returns
 */
function request(opt) {
  if (_.default.opt.key === "") {
    return console.error("\x1b[31mPlease change to your api key. \n", "\x1b[33min setOptions({key:YOURKEY})\x1b[0m");
  }

  var instance = _axios.default.create({
    baseURL: "https://api.neople.co.kr",
    timeout: _.default.opt.requestTimeout
  });

  if (opt.params == undefined) opt.params = {};
  opt.params.apikey = _.default.opt.key;
  opt.url = "".concat(opt.base, "?").concat(_querystring.default.stringify(opt.params));
  var rsp = instance.get(opt.url).then(function (res) {
    return rsp = _.default.opt.responeHeader ? {
      status: res.status,
      statusText: res.statusText,
      headers: res.headers,
      body: res.data
    } : res.data;
  }).catch(function (err) {
    if (_.default.opt.hideOnErrorApiKey) err.response.data.url = err.response.config.url.replace(_.default.opt.key, _.default.opt.hidekeyText);else err.response.data.url = err.response.config.url;
    return rsp = {
      err: _.default.opt.responeHeader ? {
        status: err.response.status,
        statusText: err.response.statusText,
        headers: err.response.headers,
        body: err.response.data
      } : err.response.data
    };
    console.log("\x1b[31m[DNF_API] RequestError\x1b[0m :", err.response.data.url.replace(_.default.opt.hidekeyText, "\x1B[33m".concat(_.default.opt.hidekeyText, "\x1B[0m")));
  }); //convert JSON

  if (_.default.opt.returnJSON) rsp = JSON.stringify(rsp);
  return rsp;
}

var _default = request;
exports.default = _default;