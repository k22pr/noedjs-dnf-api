import Util from "../util";

/**
 * 해당 캐릭터가 장착한 장비 정보를 받아옵니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const equipment = (serverId: string, characterId: string) => {
  let opt = {
    base: `df/servers/${serverId}/characters/${characterId}/equip/equipment`
  };
  return Util.Query.Request(opt);
};

/**
 * 해당 캐릭터가 장착한 아바타 정보를 받아옵니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const avatar = (serverId: string, characterId: string) => {
  let opt = {
    base: `df/servers/${serverId}/characters/${characterId}/equip/avatar`
  };
  return Util.Query.Request(opt);
};

/**
 * 해당 캐릭터가 장착한 크리쳐 정보를 받아옵니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const creature = (serverId: string, characterId: string) => {
  let opt = {
    base: `df/servers/${serverId}/characters/${characterId}/equip/creature`
  };
  return Util.Query.Request(opt);
};

/**
 * 해당 캐릭터가 장착한 휘장 정보를 받아옵니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const flag = (serverId: string, characterId: string) => {
  let opt = {
    base: `df/servers/${serverId}/characters/${characterId}/equip/flag`
  };
  return Util.Query.Request(opt);
};
