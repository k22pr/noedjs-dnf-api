import Util from "../util";

/**
 * 서버 이름과 캐릭터 닉네임을 입력하여 해당 캐릭터를 검색합니다.
 *
 * @param {string} [serverId=""] 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} [characterName=""] 검색할 캐릭터의 이름입니다.
 * @param {object} [params={}] 선택적 요청변수의 Object입니다.
 */
export const character = (serverId: string, characterName: string, params: any = {}) => {
  if (params === undefined) params = {};
  params.characterName = characterName;
  let opt = {
    base: `df/servers/${serverId}/characters/`,
    params: params
  };
  return Util.Query.Request(opt);
};

/**
 * 캐릭터 ID를 입력하여 해당 캐릭터 정보를 받아옵니다
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const characterId = (serverId: string, characterId: string) => {
  let opt = {
    base: `df/servers/${serverId}/characters/${characterId}`
  };
  return Util.Query.Request(opt);
};

/**
 * 캐릭터 ID를 입력하여 해당 캐릭터의 타임라인 정보를 검색합니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export const timeline = (serverId: string, characterId: string, params: any = {}) => {
  let opt = {
    base: `df/servers/${serverId}/characters/${characterId}/timeline`,
    params: params
  };
  return Util.Query.Request(opt);
};

/**
 * 캐릭터 ID를 입력하여 해당 캐릭터의 능력치 정보를 검색합니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const status = (serverId: string, characterId: string) => {
  let opt = {
    base: `df/servers/${serverId}/characters/${characterId}/status`
  };
  return Util.Query.Request(opt);
};
