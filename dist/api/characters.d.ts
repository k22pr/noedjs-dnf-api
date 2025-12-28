import type * as model from "../model";
import { type params, staticUtil } from "../util";
/**
 * 서버 이름과 캐릭터 닉네임을 입력하여 해당 캐릭터를 검색합니다.
 *
 * @param {staticUtil.Server} [serverId=""] 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} [characterName=""] 검색할 캐릭터의 이름입니다.
 * @param {object} [params={}] 선택적 요청변수의 Object입니다.
 */
export declare const characterName: (serverId: staticUtil.Server, characterName: string, params?: params.ICharParams) => Promise<model.IDnfResponse<model.IRows<model.char.ICharacter>>>;
/**
 * 캐릭터 ID를 입력하여 해당 캐릭터 정보를 받아옵니다
 *
 * @param {staticUtil.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export declare const characterId: (serverId: staticUtil.Server, characterId: string) => Promise<model.IDnfResponse<model.char.IInfo>>;
/**
 * 캐릭터 ID를 입력하여 해당 캐릭터의 타임라인 정보를 검색합니다.
 *
 * @param {staticUtil.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export declare const timeline: (serverId: staticUtil.Server, characterId: string, params?: params.ITimeLine) => Promise<model.IDnfResponse<model.char.ITimeline>>;
/**
 * 캐릭터 ID를 입력하여 해당 캐릭터의 능력치 정보를 검색합니다.
 *
 * @param {staticUtil.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export declare const status: (serverId: staticUtil.Server, characterId: string) => Promise<model.IDnfResponse<model.char.ICharacterStatus>>;
/**
 * 캐릭터를 명성 구간으로 검색합니다.
 * 최근 90일 이내 접속한 110 레벨 이상 캐릭터만 검색 가능합니다.
 * 최대 2,000 범위내에서만 검색 가능합니다.
 *
 * @param {staticUtil.Server} serverId 캐릭터가 존재하는 서버의 이름입니다. 'all'로 전체 서버 검색 가능
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export declare const charactersFame: (serverId: staticUtil.Server | "all", params?: params.ICharactersFame) => Promise<model.IDnfResponse<model.IRows<model.char.ICharacterFame>>>;
