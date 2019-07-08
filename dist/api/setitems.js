"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detail = exports.setitem = void 0;

var _util = _interopRequireDefault(require("../util"));

/**
 * 세트 아이템 정보를 세트의 이름으로 검색합니다.
 *
 * @param {string} setItemName 세트 아이템의 이름입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
var setitem = function setitem(setItemName) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (params === undefined) params = {};
  params.setItemName = setItemName;
  var opt = {
    base: "df/setitems",
    params: params
  };
  return _util["default"].Query.Request(opt);
};
/**
 * 세트 ID로 세트 아이템 정보를 받아옵니다.
 *
 * @param {string} setItemId 세트 아이템의 ID입니다.
 */


exports.setitem = setitem;

var detail = function detail(setItemId) {
  var opt = {
    base: "df/setitems/".concat(setItemId)
  };
  return _util["default"].Query.Request(opt);
};

exports.detail = detail;