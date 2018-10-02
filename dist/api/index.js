"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("../config/config"));

var _characters = _interopRequireDefault(require("./routes/characters"));

var _auction = _interopRequireDefault(require("./routes/auction"));

var _items = _interopRequireDefault(require("./routes/items"));

var _setitems = _interopRequireDefault(require("./routes/setitems"));

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var api = {
  servers: function () {
    var _servers = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var opt;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              opt = {
                base: "df/servers"
              };
              _context.next = 3;
              return (0, _request.default)(opt);

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function servers() {
      return _servers.apply(this, arguments);
    };
  }(),
  characters: _characters.default,
  auction: _auction.default,
  items: _items.default,
  jobs: function () {
    var _jobs = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var opt;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              opt = {
                base: "df/jobs"
              };
              _context2.next = 3;
              return (0, _request.default)(opt);

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function jobs() {
      return _jobs.apply(this, arguments);
    };
  }(),
  setitems: _setitems.default
};
api.config = _config.default;
var _default = api;
exports.default = _default;