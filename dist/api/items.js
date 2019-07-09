"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detail = exports.item = void 0;

var _util = require("../util");

/**
 * 현재 인게임에서 획득 가능한 아이템의 경우만 검색 가능합니다.
 *
 * @param {string} itemName 검색할 아이템의 명칭
 * @param {string} params 선택적 요청변수의 Object입니다.
 */
var item = function item(itemName, params) {
  //   if (params === undefined) params = {};
  params.itemName = itemName; //   if (query) params.q = Query.makeItemQuery(query);
  //let querystring =

  var opt = {
    base: _util.Query.UriBuilder(_util.Static.BaseUri.Item),
    params: params
  };
  return _util.Query.Request(opt);
};
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