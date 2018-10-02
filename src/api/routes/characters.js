import request from "../request";
import equip from "./characters.equip";
import skill from "./characters.skill";

const characters = {
  /**
   * 서버 이름과 캐릭터 닉네임을 입력하여 해당 캐릭터를 검색합니다.
   *
   * @param {string} [serverId=""] 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} [characterName=""] 검색할 캐릭터의 이름입니다.
   * @param {object} [params={}] 선택적 요청변수의 Object입니다.
   */
  character: async (serverId, characterName, params = {}) => {
    if (params === undefined) params = {};
    params.characterName = characterName;
    let opt = {
      base: `df/servers/${serverId}/characters/`,
      params: params
    };
    return await request(opt);
  },

  /**
   * 캐릭터 ID를 입력하여 해당 캐릭터의 타임라인 정보를 검색합니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   * @param {object} params 선택적 요청변수의 Object입니다.
   */
  timeline: async (serverId, characterId, params = {}) => {
    let opt = {
      base: `df/servers/${serverId}/characters/${characterId}/timeline`,
      params: params
    };
    return await request(opt);
  },

  /**
   * 캐릭터 ID를 입력하여 해당 캐릭터의 능력치 정보를 검색합니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  status: async (serverId, characterId) => {
    let opt = {
      base: `df/servers/${serverId}/characters/${characterId}/status`
    };
    return await request(opt);
  },
  equip: equip,
  skill: skill
};

export default characters;
