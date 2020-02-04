"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
/**
 * 현재 인게임에서 획득 가능한 아이템의 경우만 검색 가능합니다.
 *
 * @param {string} itemName 검색할 아이템의 명칭
 * @param {string} params 선택적 요청변수의 Object입니다.
 */
exports.item = (itemName, params = {}) => __awaiter(void 0, void 0, void 0, function* () {
    //   if (params === undefined) params = {};
    params.itemName = itemName;
    //   if (query) params.q = Query.makeItemQuery(query);
    //let querystring =
    let opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.Item),
        params: params,
    };
    return yield util_1.Query.Request(opt);
});
/**
 * 해당하는 아이템의 상세정보를 요청합니다.
 *
 * @param {string} itemId 검색할 아이템의 ID
 */
exports.detail = (itemId) => {
    let opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.Item, itemId),
    };
    return util_1.Query.Request(opt);
};
