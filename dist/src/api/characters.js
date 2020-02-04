"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
/**
 * 서버 이름과 캐릭터 닉네임을 입력하여 해당 캐릭터를 검색합니다.
 *
 * @param {Static.Server} [serverId=""] 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} [characterName=""] 검색할 캐릭터의 이름입니다.
 * @param {object} [params={}] 선택적 요청변수의 Object입니다.
 */
exports.characterName = (serverId, characterName, params = {}) => {
    if (params === undefined)
        params = {};
    params.characterName = characterName;
    let opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.Servers, serverId, "characters"),
        params: params,
    };
    return util_1.Query.Request(opt);
};
/**
 * 캐릭터 ID를 입력하여 해당 캐릭터 정보를 받아옵니다
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
exports.characterId = (serverId, characterId) => {
    let opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.Servers, serverId, "characters", characterId),
    };
    return util_1.Query.Request(opt);
};
/**
 * 캐릭터 ID를 입력하여 해당 캐릭터의 타임라인 정보를 검색합니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
exports.timeline = (serverId, characterId, params = {}) => {
    let opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.Servers, serverId, "characters", characterId, "timeline"),
        params: params,
    };
    return util_1.Query.Request(opt);
};
/**
 * 캐릭터 ID를 입력하여 해당 캐릭터의 능력치 정보를 검색합니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
exports.status = (serverId, characterId) => {
    let opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.Servers, serverId, "characters", characterId, "status"),
    };
    return util_1.Query.Request(opt);
};
