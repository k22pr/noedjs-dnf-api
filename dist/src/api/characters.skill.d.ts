import { Static } from "../util";
/**
 *  아이템 및 장비를 통한 스킬 강화 제외 입니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export declare const style: (serverId: Static.Server, characterId: string) => Promise<import("../model").DnfResponse<{}>>;
/**
 * 캐릭터 '버프 스킬 강화 장착 장비'(스위칭) 를 조회합니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export declare const equipment: (serverId: Static.Server, characterId: string) => Promise<import("../model").DnfResponse<{}>>;
/**
 * 캐릭터 '버프 스킬 강화 장착 아바타'(스위칭) 를 조회합니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export declare const avatar: (serverId: Static.Server, characterId: string) => Promise<import("../model").DnfResponse<{}>>;
/**
 * 캐릭터 '버프 스킬 강화 장착 크리쳐'(스위칭) 를 조회합니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export declare const creature: (serverId: Static.Server, characterId: string) => Promise<import("../model").DnfResponse<{}>>;
