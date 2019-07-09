"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _axios = _interopRequireDefault(require("axios"));

var _querystring = _interopRequireDefault(require("querystring"));

var _consola = _interopRequireDefault(require("consola"));

var Util = _interopRequireWildcard(require("./"));

// import urlencode from "urlencode";
var sender = _axios["default"].create({
  baseURL: "https://api.neople.co.kr",
  timeout: Util.Config.axiosTimeout
});

var showUrl = function showUrl(url) {
  return url.replace(Util.Config.key, Util.Config.hidekeyText);
};

var Request =
/*#__PURE__*/
function () {
  function Request() {
    (0, _classCallCheck2["default"])(this, Request);
  }

  (0, _createClass2["default"])(Request, null, [{
    key: "UriBuilder",
    value: function UriBuilder() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return args.join("/");
    }
    /**
     *  던전앤파이터 API 서버에 응답을 요청하는 함수 입니다.
     * 해당 함수를 직접 호출 하는것을 권장하지 않습니다.
     *
     * @param {object} opt (요청을 보낼 Parameter값)
     * @returns
     */

  }, {
    key: "Request",
    value: function () {
      var _Request = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var opt,
            method,
            responseData,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                opt = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                method = _args.length > 1 && _args[1] !== undefined ? _args[1] : "GET";

                if (!Util.Config.key || Util.Config.key == "") {
                  _consola["default"].error("Please change to your api key. "); // return null;
                  // return console.error("\x1b[31mPlease change to your api key. \n", "\x1b[33min setConfigs({key:YOURKEY})\x1b[0m");

                }

                if (opt.params == undefined) opt.params = {};
                opt.params.apikey = Util.Config.key;
                opt.url = "".concat(opt.base, "?").concat(_querystring["default"].stringify(opt.params));
                _context.t0 = method.toLowerCase();
                _context.next = _context.t0 === "post" ? 9 : _context.t0 === "get" ? 13 : 13;
                break;

              case 9:
                _context.next = 11;
                return sender.post(opt.url).then(function (res) {
                  var data;
                  if (res.data.rows) data = res.data.rows;else data = res.data;
                  return {
                    data: data
                  };
                })["catch"](function (err) {
                  var error = {
                    url: showUrl(opt.url),
                    status: err.status,
                    statusText: err.response.statusText,
                    code: err.response.data.error.code,
                    message: err.response.data.error.message
                  };
                  return {
                    error: error
                  };
                });

              case 11:
                responseData = _context.sent;
                return _context.abrupt("break", 17);

              case 13:
                _context.next = 15;
                return sender.get(opt.url).then(function (res) {
                  var data;
                  if (res.data.rows) data = res.data.rows;else data = res.data;
                  return {
                    data: data
                  };
                })["catch"](function (err) {
                  var error = {
                    url: showUrl(opt.url),
                    status: err.response.status,
                    statusText: err.response.statusText,
                    code: err.response.data.error.code,
                    message: err.response.data.error.message
                  };
                  return {
                    error: error
                  };
                });

              case 15:
                responseData = _context.sent;
                return _context.abrupt("break", 17);

              case 17:
                return _context.abrupt("return", responseData);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function Request() {
        return _Request.apply(this, arguments);
      }

      return Request;
    }()
  }, {
    key: "makeItemQuery",
    value: function makeItemQuery(query) {
      //  return JSON.stringify(query).replace(/\"|\{|\}/gi, "");
      return encodeURI(query);
    }
  }]);
  return Request;
}();

exports["default"] = Request;
module.exports = exports.default;