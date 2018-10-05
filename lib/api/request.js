"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _src = _interopRequireDefault(require("../../src"));

var _axios = _interopRequireDefault(require("axios"));

var _querystring = _interopRequireDefault(require("querystring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 *  던전앤파이터 API 서버에 응답을 요청하는 함수 입니다.
 * 해당 함수를 직접 호출 하는것을 권장하지 않습니다.
 *
 * @param {object} opt (요청을 보낼 Parameter값)
 * @returns
 */
function request(_x) {
  return _request.apply(this, arguments);
}

function _request() {
  _request = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(opt) {
    var instance, rsp;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(_src.default.opt.APIKey === "")) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", console.error("\x1b[31mPlease change to your api key. \n", "\x1b[33min ./config/config.auth.js\x1b[0m"));

          case 2:
            instance = _axios.default.create({
              baseURL: "https://api.neople.co.kr",
              timeout: _src.default.opt.requestTimeout
            });
            if (opt.params == undefined) opt.params = {};
            opt.params.apikey = _src.default.opt.APIKey;
            opt.url = "".concat(opt.base, "?").concat(_querystring.default.stringify(opt.params));
            rsp = {};
            _context.next = 9;
            return instance.get(opt.url).then(function (res) {
              rsp = _src.default.opt.responeHeader ? {
                status: res.status,
                statusText: res.statusText,
                headers: res.headers,
                body: res.data
              } : res.data;
            }).catch(function (err) {
              if (_src.default.opt.hideOnErrorApiKey) err.response.data.url = err.response.config.url.replace(_src.default.opt.APIKey, _src.default.opt.hidekeyText);else err.response.data.url = err.response.config.url;
              rsp = {
                err: _src.default.opt.responeHeader ? {
                  status: err.response.status,
                  statusText: err.response.statusText,
                  headers: err.response.headers,
                  body: err.response.data
                } : err.response.data
              };
              console.log("\x1b[31m[DNF_API] RequestError\x1b[0m :", err.response.data.url.replace(_src.default.opt.hidekeyText, "\x1B[33m".concat(_src.default.opt.hidekeyText, "\x1B[0m")));
            });

          case 9:
            //convert JSON
            if (_src.default.opt.returnJSON) rsp = JSON.stringify(rsp);
            _context.next = 12;
            return rsp;

          case 12:
            return _context.abrupt("return", _context.sent);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _request.apply(this, arguments);
}

var _default = request;
exports.default = _default;