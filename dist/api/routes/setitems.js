"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _request = _interopRequireDefault(require("../request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var setitems = {
  /**
   * 세트 아이템 정보를 세트의 이름으로 검색합니다.
   *
   * @param {string} setItemName 세트 아이템의 이름입니다.
   * @param {object} params 선택적 요청변수의 Object입니다.
   */
  setitem: function () {
    var _setitem = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(setItemName, params) {
      var opt;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (params === undefined) params = {};
              params.setItemName = setItemName;
              opt = {
                base: "df/setitems",
                params: params
              };
              _context.next = 5;
              return (0, _request.default)(opt);

            case 5:
              return _context.abrupt("return", _context.sent);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function setitem(_x, _x2) {
      return _setitem.apply(this, arguments);
    };
  }(),

  /**
   * 세트 ID로 세트 아이템 정보를 받아옵니다.
   *
   * @param {string} setItemId 세트 아이템의 ID입니다.
   */
  detail: function () {
    var _detail = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(setItemId) {
      var opt;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              opt = {
                base: "df/setitems/".concat(setItemId)
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

    return function detail(_x3) {
      return _detail.apply(this, arguments);
    };
  }()
};
var _default = setitems;
exports.default = _default;