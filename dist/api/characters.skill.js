"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
/**
 *  아이템 및 장비를 통한 스킬 강화 제외 입니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
exports.style = (serverId, characterId) => {
    let opt = {
        base: `${util_1.Query.UriBuilder(util_1.Static.BaseUri.Servers, serverId, "characters", characterId, "skill", "style")}`,
    };
    return util_1.Query.Request(opt);
};
/**
 * 캐릭터 '버프 스킬 강화 장착 장비'(스위칭) 를 조회합니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
exports.equipment = (serverId, characterId) => {
    let opt = {
        base: `${util_1.Query.UriBuilder(util_1.Static.BaseUri.Servers, serverId, "characters", characterId, "skill", "buff", "equip", "equipment")}`,
    };
    return util_1.Query.Request(opt);
};
/**
 * 캐릭터 '버프 스킬 강화 장착 아바타'(스위칭) 를 조회합니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
exports.avatar = (serverId, characterId) => {
    let opt = {
        base: `${util_1.Query.UriBuilder(util_1.Static.BaseUri.Servers, serverId, "characters", characterId, "skill", "buff", "equip", "avatar")}`,
    };
    return util_1.Query.Request(opt);
};
/**
 * 캐릭터 '버프 스킬 강화 장착 크리쳐'(스위칭) 를 조회합니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
exports.creature = (serverId, characterId) => {
    let opt = {
        base: `${util_1.Query.UriBuilder(util_1.Static.BaseUri.Servers, serverId, "characters", characterId, "skill", "buff", "equip", "creature")}`,
    };
    return util_1.Query.Request(opt);
};
