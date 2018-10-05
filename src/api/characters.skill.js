import request from "../request";
const skill = {
  /**
   *  아이템 및 장비를 통한 스킬 강화 제외 입니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  style: (serverId, characterId) => {
    let opt = {
      base: `df/servers/${serverId}/characters/${characterId}/skill/style`
    };
    return request(opt);
  },

  /**
   * 캐릭터 '버프 스킬 강화 장착 장비'(스위칭) 를 조회합니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  equipment: (serverId, characterId) => {
    let opt = {
      base: `df/servers/${serverId}/characters/${characterId}/skill/buff/equip/equipment`
    };
    return request(opt);
  },

  /**
   * 캐릭터 '버프 스킬 강화 장착 아바타'(스위칭) 를 조회합니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  avatar: (serverId, characterId) => {
    let opt = {
      base: `df/servers/${serverId}/characters/${characterId}/skill/buff/equip/avatar`
    };
    return request(opt);
  },

  /**
   * 캐릭터 '버프 스킬 강화 장착 크리쳐'(스위칭) 를 조회합니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  creature: (serverId, characterId) => {
    let opt = {
      base: `df/servers/${serverId}/characters/${characterId}/skill/buff/equip/creature`
    };
    return request(opt);
  }
};

export default skill;
