"use strict";
<<<<<<< Updated upstream

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detail = exports.setitem = void 0;

var _util = require("../util");

=======
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __importDefault(require("../util"));
>>>>>>> Stashed changes
/**
 * 세트 아이템 정보를 세트의 이름으로 검색합니다.
 *
 * @param {string} setItemName 세트 아이템의 이름입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
<<<<<<< Updated upstream
var setitem = function setitem(setItemName) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  params.setItemName = setItemName;
  var opt = {
    base: _util.Query.UriBuilder(_util.Static.BaseUri.SetItem),
    params: params
  };
  return _util.Query.Request(opt);
=======
exports.setitem = function (setItemName, params) {
    if (params === void 0) { params = {}; }
    if (params === undefined)
        params = {};
    params.setItemName = setItemName;
    var opt = {
        base: "df/setitems",
        params: params
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
/**
 * 세트 ID로 세트 아이템 정보를 받아옵니다.
 *
 * @param {string} setItemId 세트 아이템의 ID입니다.
 */
<<<<<<< Updated upstream


exports.setitem = setitem;

var detail = function detail(setItemId) {
  var opt = {
    base: _util.Query.UriBuilder(_util.Static.BaseUri.SetItem, setItemId)
  };
  return _util.Query.Request(opt);
=======
exports.detail = function (setItemId) {
    var opt = {
        base: "df/setitems/" + setItemId
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
