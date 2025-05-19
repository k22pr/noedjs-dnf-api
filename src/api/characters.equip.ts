import { query, staticUtil } from "../util";

/**
 * 해당 캐릭터가 장착한 장비 정보를 받아옵니다.
 *
 * @param {staticUtil.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const equipment = (serverId: staticUtil.Server, characterId: string) => {
  const opt = {
    base: query.UriBuilder(
      staticUtil.BaseUri.Servers,
      serverId,
      "characters",
      characterId,
      "equip",
      "equipment"
    ),
  };
  return query.Request(opt);
};

/**
 * 해당 캐릭터가 장착한 아바타 정보를 받아옵니다.
 *
 * @param {staticUtil.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const avatar = (serverId: staticUtil.Server, characterId: string) => {
  const opt = {
    base: query.UriBuilder(
      staticUtil.BaseUri.Servers,
      serverId,
      "characters",
      characterId,
      "equip",
      "avatar"
    ),
  };
  return query.Request(opt);
};

/**
 * 해당 캐릭터가 장착한 크리쳐 정보를 받아옵니다.
 *
 * @param {staticUtil.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const creature = (serverId: staticUtil.Server, characterId: string) => {
  const opt = {
    base: query.UriBuilder(
      staticUtil.BaseUri.Servers,
      serverId,
      "characters",
      characterId,
      "equip",
      "creature"
    ),
  };
  return query.Request(opt);
};

/**
 * 해당 캐릭터가 장착한 휘장 정보를 받아옵니다.
 *
 * @param {staticUtil.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const flag = (serverId: staticUtil.Server, characterId: string) => {
  const opt = {
    base: query.UriBuilder(
      staticUtil.BaseUri.Servers,
      serverId,
      "characters",
      characterId,
      "equip",
      "flag"
    ),
  };
  return query.Request(opt);
};
