"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detail = exports.item = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _util = require("../util");

/**
 * 현재 인게임에서 획득 가능한 아이템의 경우만 검색 가능합니다.
 *
 * @param {string} itemName 검색할 아이템의 명칭
 * @param {string} params 선택적 요청변수의 Object입니다.
 */
var item =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(itemName) {
    var params,
        opt,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            //   if (params === undefined) params = {};
            params.itemName = itemName; //   if (query) params.q = Query.makeItemQuery(query);
            //let querystring =

            opt = {
              base: _util.Query.UriBuilder(_util.Static.BaseUri.Item),
              params: params
            };
            _context.next = 5;
            return _util.Query.Request(opt);

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function item(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * 해당하는 아이템의 상세정보를 요청합니다.
 *
 * @param {string} itemId 검색할 아이템의 ID
 */


exports.item = item;

var detail = function detail(itemId) {
  var opt = {
    base: _util.Query.UriBuilder(_util.Static.BaseUri.Item, itemId)
  };
  return _util.Query.Request(opt);
};

exports.detail = detail;