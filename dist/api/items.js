"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detail = exports.item = void 0;

var _util = _interopRequireDefault(require("../util"));

/**
 * 현재 인게임에서 획득 가능한 아이템의 경우만 검색 가능합니다.
 *
 * @param {string} itemName 검색할 아이템의 명칭
 * @param {string} params 선택적 요청변수의 Object입니다.
 * @param {string} query 선택적 요청변수의 Object입니다. (실제 요청의 q에 해당하는 부분입니다.)
 */
var item = function item(itemName, params, query) {
  if (params === undefined) params = {};
  params.itemName = itemName;
  if (query) params.q = _util["default"].Query.makeItemQuery(query); //let querystring =

  var opt = {
    base: "df/items",
    params: params
  };
  return _util["default"].Query.Request(opt);
};
/**
 * 해당하는 아이템의 상세정보를 요청합니다.
 *
 * @param {string} itemId 검색할 아이템의 ID
 */


exports.item = item;

var detail = function detail(itemId) {
  var opt = {
    base: "df/items/".concat(itemId)
  };
  return _util["default"].Query.Request(opt);
};

exports.detail = detail;