import request from "../request";

const equip = {
  /**
   * 해당 캐릭터가 장착한 장비 정보를 받아옵니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  equipment: async (serverId, characterId) => {
    let opt = {
      base: `df/servers/${serverId}/characters/${characterId}/equip/equipment`
    };
    return await request(opt);
  },

  /**
   * 해당 캐릭터가 장착한 아바타 정보를 받아옵니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  avatar: async (serverId, characterId) => {
    let opt = {
      base: `df/servers/${serverId}/characters/${characterId}/equip/avatar`
    };
    return await request(opt);
  },

  /**
   * 해당 캐릭터가 장착한 크리쳐 정보를 받아옵니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  creature: async (serverId, characterId) => {
    let opt = {
      base: `df/servers/${serverId}/characters/${characterId}/equip/creature`
    };
    return await request(opt);
  },

  /**
   * 해당 캐릭터가 장착한 휘장 정보를 받아옵니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  flag: async (serverId, characterId) => {
    let opt = {
      base: `df/servers/${serverId}/characters/${characterId}/equip/flag`
    };
    return await request(opt);
  }
};

export default equip;
