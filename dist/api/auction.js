"use strict";
<<<<<<< Updated upstream

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.no = exports.itemId = exports.itemName = void 0;

var _util = require("../util");

=======
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __importDefault(require("../util"));
>>>>>>> Stashed changes
/**
 * 경매장에 등록된 아이템을 "아이템 이름"을 기준으로 받아옵니다
 *
 * @param {string} itemName 검색할 아이템의 이름입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
<<<<<<< Updated upstream
var itemName = function itemName(_itemName) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  params.itemName = _itemName;
  var opt = {
    base: _util.Query.UriBuilder(_util.Static.BaseUri.Auction),
    params: params
  };
  return _util.Query.Request(opt);
=======
exports.itemName = function (itemName, params, query) {
    if (params === undefined)
        params = {};
    params.itemName = itemName;
    if (query)
        params.q = util_1.default.Query.makeItemQuery(query);
    //let querystring =
    var opt = {
        base: "df/auction",
        params: params
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
/**
 * 경매장에 등록된 아이템을 "아이템 아이디"을 기준으로 받아옵니다
 *
 * @param {string} itemID 검색할 아이템의 ID입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
<<<<<<< Updated upstream


exports.itemName = itemName;

var itemId = function itemId(_itemId) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  params.itemId = _itemId;
  var opt = {
    base: _util.Query.UriBuilder(_util.Static.BaseUri.Auction),
    params: params
  };
  return _util.Query.Request(opt);
=======
exports.itemId = function (itemId, params, query) {
    if (params === undefined)
        params = {};
    params.itemId = itemId;
    if (query)
        params.q = util_1.default.Query.makeItemQuery(query);
    var opt = {
        base: "df/auction",
        params: params
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
/**
 * 경매장에 등록된 경매장번호로 받아옵니다.
 *
 * @param {Number} auctionNo 검색할 경매장 번호입니다.
 */
<<<<<<< Updated upstream


exports.itemId = itemId;

var no = function no(auctionNo) {
  var opt = {
    base: _util.Query.UriBuilder(_util.Static.BaseUri.Auction, auctionNo)
  };
  return _util.Query.Request(opt);
=======
exports.no = function (auctionNo) {
    var opt = {
        base: "df/auction/" + Number(auctionNo)
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
