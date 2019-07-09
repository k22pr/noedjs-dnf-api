"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
/**
 * 세트 아이템 정보를 세트의 이름으로 검색합니다.
 *
 * @param {string} setItemName 세트 아이템의 이름입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
exports.setitem = function (setItemName, params) {
    if (params === void 0) { params = {}; }
    params.setItemName = setItemName;
    var opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.SetItem),
        params: params,
    };
    return util_1.Query.Request(opt);
};
/**
 * 세트 ID로 세트 아이템 정보를 받아옵니다.
 *
 * @param {string} setItemId 세트 아이템의 ID입니다.
 */
exports.detail = function (setItemId) {
    var opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.SetItem, setItemId),
    };
    return util_1.Query.Request(opt);
};
