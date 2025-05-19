import type * as model from "../model";
import { type params, query, staticUtil } from "../util";

/**
 * 서버 이름과 캐릭터 닉네임을 입력하여 해당 캐릭터를 검색합니다.
 *
 * @param {staticUtil.Server} [serverId=""] 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} [characterName=""] 검색할 캐릭터의 이름입니다.
 * @param {object} [params={}] 선택적 요청변수의 Object입니다.
 */
export const characterName = (
  serverId: staticUtil.Server,
  characterName: string,
  params: params.ICharParams = {}
) => {
  // if (params === undefined) params = {};
  params.characterName = characterName;
  const opt = {
    base: query.UriBuilder(staticUtil.BaseUri.Servers, serverId, "characters"),
    params: params,
  };
  return query.Request<model.IRows<model.char.ICharacter>>(opt);
};

/**
 * 캐릭터 ID를 입력하여 해당 캐릭터 정보를 받아옵니다
 *
 * @param {staticUtil.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const characterId = (
  serverId: staticUtil.Server,
  characterId: string
): Promise<model.IDnfResponse<model.char.IInfo>> => {
  const opt = {
    base: query.UriBuilder(
      staticUtil.BaseUri.Servers,
      serverId,
      "characters",
      characterId
    ),
  };
  return query.Request<model.char.IInfo>(opt);
};

/**
 * 캐릭터 ID를 입력하여 해당 캐릭터의 타임라인 정보를 검색합니다.
 *
 * @param {staticUtil.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export const timeline = (
  serverId: staticUtil.Server,
  characterId: string,
  params: params.ITimeLine = {}
): Promise<model.IDnfResponse<model.char.ITimeline>> => {
  const opt = {
    base: query.UriBuilder(
      staticUtil.BaseUri.Servers,
      serverId,
      "characters",
      characterId,
      "timeline"
    ),
    params: {
      ...params,
      ...(params.code ? { code: query.QueryBuilder(params.code) } : {}),
    },
  };
  return query.Request<model.char.ITimeline>(opt);
};

/**
 * 캐릭터 ID를 입력하여 해당 캐릭터의 능력치 정보를 검색합니다.
 *
 * @param {staticUtil.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const status = (serverId: staticUtil.Server, characterId: string) => {
  const opt = {
    base: query.UriBuilder(
      staticUtil.BaseUri.Servers,
      serverId,
      "characters",
      characterId,
      "status"
    ),
  };
  return query.Request<model.char.ICharacterStatus>(opt);
};
