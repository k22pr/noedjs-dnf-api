"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _request = _interopRequireDefault(require("../request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var items = {
  /**
   * 현재 인게임에서 획득 가능한 아이템의 경우만 검색 가능합니다.
   *
   * @param {string} itemName 검색할 아이템의 명칭
   * @param {string} params 선택적 요청변수의 Object입니다.
   * @param {string} query 선택적 요청변수의 Object입니다. (실제 요청의 q에 해당하는 부분입니다.)
   */
  item: function () {
    var _item = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(itemName, params, query) {
      var opt;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (params === undefined) params = {};
              params.itemName = itemName;
              if (query) params.q = makeItemQuery(query); //let querystring =

              opt = {
                base: "df/items",
                params: params
              };
              _context.next = 6;
              return (0, _request.default)(opt);

            case 6:
              return _context.abrupt("return", _context.sent);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function item(_x, _x2, _x3) {
      return _item.apply(this, arguments);
    };
  }(),

  /**
   * 해당하는 아이템의 상세정보를 요청합니다.
   *
   * @param {string} itemId 검색할 아이템의 ID
   */
  detail: function () {
    var _detail = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(itemId) {
      var opt;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              opt = {
                base: "df/items/".concat(itemId)
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

    return function detail(_x4) {
      return _detail.apply(this, arguments);
    };
  }()
};
var _default = items;
exports.default = _default;