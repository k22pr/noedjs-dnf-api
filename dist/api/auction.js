"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
/**
 * 경매장에 등록된 아이템을 "아이템 이름"을 기준으로 받아옵니다
 *
 * @param {string} itemName 검색할 아이템의 이름입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
exports.itemName = (itemName, params = {}) => {
    params.itemName = itemName;
    let opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.Auction),
        params,
    };
    return util_1.Query.Request(opt);
};
/**
 * 경매장에 등록된 아이템을 "아이템 아이디"을 기준으로 받아옵니다
 *
 * @param {string} itemID 검색할 아이템의 ID입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
exports.itemId = (itemId, params = {}) => {
    params.itemId = itemId;
    let opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.Auction),
        params: params,
    };
    return util_1.Query.Request(opt);
};
/**
 * 경매장에 등록된 경매장번호로 받아옵니다.
 *
 * @param {Number} auctionNo 검색할 경매장 번호입니다.
 */
exports.no = (auctionNo) => {
    let opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.Auction, auctionNo),
    };
    return util_1.Query.Request(opt);
};
exports.auctionSoldName = (itemName, params = {}) => {
    params.itemName = itemName;
    let opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.AuctionSold),
        params,
    };
    return util_1.Query.Request(opt);
};
exports.auctionSoldId = (itemId, params = {}) => {
    params.itemId = itemId;
    let opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.AuctionSold),
        params,
    };
    return util_1.Query.Request(opt);
};
