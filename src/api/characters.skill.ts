import { query, staticUtil } from "../util";
/**
 *  아이템 및 장비를 통한 스킬 강화 제외 입니다.
 *
 * @param {staticUtil.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const style = (serverId: staticUtil.Server, characterId: string) => {
  const opt = {
    base: `${query.UriBuilder(
      staticUtil.BaseUri.Servers,
      serverId,
      "characters",
      characterId,
      "skill",
      "style"
    )}`,
  };
  return query.Request(opt);
};

/**
 * 캐릭터 '버프 스킬 강화 장착 장비'(스위칭) 를 조회합니다.
 *
 * @param {staticUtil.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const equipment = (serverId: staticUtil.Server, characterId: string) => {
  const opt = {
    base: `${query.UriBuilder(
      staticUtil.BaseUri.Servers,
      serverId,
      "characters",
      characterId,
      "skill",
      "buff",
      "equip",
      "equipment"
    )}`,
  };
  return query.Request(opt);
};

/**
 * 캐릭터 '버프 스킬 강화 장착 아바타'(스위칭) 를 조회합니다.
 *
 * @param {staticUtil.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const avatar = (serverId: staticUtil.Server, characterId: string) => {
  const opt = {
    base: `${query.UriBuilder(
      staticUtil.BaseUri.Servers,
      serverId,
      "characters",
      characterId,
      "skill",
      "buff",
      "equip",
      "avatar"
    )}`,
  };
  return query.Request(opt);
};

/**
 * 캐릭터 '버프 스킬 강화 장착 크리쳐'(스위칭) 를 조회합니다.
 *
 * @param {staticUtil.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const creature = (serverId: staticUtil.Server, characterId: string) => {
  const opt = {
    base: `${query.UriBuilder(
      staticUtil.BaseUri.Servers,
      serverId,
      "characters",
      characterId,
      "skill",
      "buff",
      "equip",
      "creature"
    )}`,
  };
  return query.Request(opt);
};
