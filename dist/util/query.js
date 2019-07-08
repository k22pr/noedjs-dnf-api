"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _axios = _interopRequireDefault(require("axios"));

var _querystring = _interopRequireDefault(require("querystring"));

var _ = _interopRequireDefault(require("./"));

var sender = _axios["default"].create({
  baseURL: "https://api.neople.co.kr",
  timeout: _["default"].Option.axiosTimeout
});

var Request =
/*#__PURE__*/
function () {
  function Request() {
    (0, _classCallCheck2["default"])(this, Request);
  }

  (0, _createClass2["default"])(Request, null, [{
    key: "Request",

    /**
     *  던전앤파이터 API 서버에 응답을 요청하는 함수 입니다.
     * 해당 함수를 직접 호출 하는것을 권장하지 않습니다.
     *
     * @param {object} opt (요청을 보낼 Parameter값)
     * @returns
     */
    value: function Request() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (_["default"].Option.key === "") {
        return console.error("\x1b[31mPlease change to your api key. \n", "\x1b[33min setOptions({key:YOURKEY})\x1b[0m");
      }

      if (opt.params == undefined) opt.params = {};
      opt.params.apikey = _["default"].Option.key;
      opt.url = "".concat(opt.base, "?").concat(_querystring["default"].stringify(opt.params));
      var rsp = sender.get(opt.url).then(function (res) {
        return rsp = _["default"].Option.responeHeader ? {
          status: res.status,
          statusText: res.statusText,
          headers: res.headers,
          body: res.data
        } : res.data;
      })["catch"](function (err) {
        if (_["default"].Option.hideOnErrorApiKey) err.response.data.url = err.response.config.url.replace(_["default"].Option.key, _["default"].Option.hidekeyText);else err.response.data.url = err.response.config.url;
        return rsp = {
          err: _["default"].Option.responeHeader ? {
            status: err.response.status,
            statusText: err.response.statusText,
            headers: err.response.headers,
            body: err.response.data
          } : err.response.data
        };
        console.log("\x1b[31m[DNF_API] RequestError\x1b[0m :", err.response.data.url.replace(_["default"].Option.hidekeyText, "\x1B[33m".concat(_["default"].Option.hidekeyText, "\x1B[0m")));
      }); //convert JSON

      if (_["default"].Option.returnJSON) rsp = JSON.stringify(rsp);
      return rsp;
    }
  }, {
    key: "makeItemQuery",
    value: function makeItemQuery(query) {
      return JSON.stringify(query).replace(/\"|\{|\}/gi, "");
    }
  }]);
  return Request;
}();

exports["default"] = Request;
module.exports = exports.default;