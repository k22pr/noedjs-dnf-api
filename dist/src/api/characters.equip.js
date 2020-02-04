"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
/**
 * 해당 캐릭터가 장착한 장비 정보를 받아옵니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
exports.equipment = (serverId, characterId) => {
    let opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.Servers, serverId, "characters", characterId, "equip", "equipment"),
    };
    return util_1.Query.Request(opt);
};
/**
 * 해당 캐릭터가 장착한 아바타 정보를 받아옵니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
exports.avatar = (serverId, characterId) => {
    let opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.Servers, serverId, "characters", characterId, "equip", "avatar"),
    };
    return util_1.Query.Request(opt);
};
/**
 * 해당 캐릭터가 장착한 크리쳐 정보를 받아옵니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
exports.creature = (serverId, characterId) => {
    let opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.Servers, serverId, "characters", characterId, "equip", "creature"),
    };
    return util_1.Query.Request(opt);
};
/**
 * 해당 캐릭터가 장착한 휘장 정보를 받아옵니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
exports.flag = (serverId, characterId) => {
    let opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.Servers, serverId, "characters", characterId, "equip", "flag"),
    };
    return util_1.Query.Request(opt);
};
