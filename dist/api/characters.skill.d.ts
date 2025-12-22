import { staticUtil } from "../util";
/**
 *  아이템 및 장비를 통한 스킬 강화 제외 입니다.
 *
 * @param {staticUtil.server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export declare const style: (serverId: staticUtil.server, characterId: string) => Promise<import("../model").IDnfResponse<unknown>>;
/**
 * 캐릭터 '버프 스킬 강화 장착 장비'(스위칭) 를 조회합니다.
 *
 * @param {staticUtil.server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export declare const equipment: (serverId: staticUtil.server, characterId: string) => Promise<import("../model").IDnfResponse<unknown>>;
/**
 * 캐릭터 '버프 스킬 강화 장착 아바타'(스위칭) 를 조회합니다.
 *
 * @param {staticUtil.server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export declare const avatar: (serverId: staticUtil.server, characterId: string) => Promise<import("../model").IDnfResponse<unknown>>;
/**
 * 캐릭터 '버프 스킬 강화 장착 크리쳐'(스위칭) 를 조회합니다.
 *
 * @param {staticUtil.server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export declare const creature: (serverId: staticUtil.server, characterId: string) => Promise<import("../model").IDnfResponse<unknown>>;
