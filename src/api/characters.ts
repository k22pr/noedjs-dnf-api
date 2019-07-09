import { Query, Static, Params } from "../util";
import * as Model from "../model";

/**
 * 서버 이름과 캐릭터 닉네임을 입력하여 해당 캐릭터를 검색합니다.
 *
 * @param {Static.Server} [serverId=""] 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} [characterName=""] 검색할 캐릭터의 이름입니다.
 * @param {object} [params={}] 선택적 요청변수의 Object입니다.
 */
export const characterName = (serverId: Static.Server, characterName: string, params: Params.ICharParams = {}): Promise<Model.DnfResponse<Model.Character[]>> => {
  if (params === undefined) params = {};
  params.characterName = characterName;
  let opt = {
    base: Query.UriBuilder(Static.BaseUri.Servers, serverId, "characters"),
    params: params,
  };
  return Query.Request<Model.Character[]>(opt);
};

/**
 * 캐릭터 ID를 입력하여 해당 캐릭터 정보를 받아옵니다
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const characterId = (serverId: Static.Server, characterId: string): Promise<Model.DnfResponse<Model.CharacterInfo>> => {
  let opt = {
    base: Query.UriBuilder(Static.BaseUri.Servers, serverId, "characters", characterId),
  };
  return Query.Request<Model.CharacterInfo>(opt);
};

/**
 * 캐릭터 ID를 입력하여 해당 캐릭터의 타임라인 정보를 검색합니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export const timeline = (serverId: Static.Server, characterId: string, params: Params.ICharParams = {}) => {
  let opt = {
    base: Query.UriBuilder(Static.BaseUri.Servers, serverId, "characters", characterId, "timeline"),
    params: params,
  };
  return Query.Request(opt);
};

/**
 * 캐릭터 ID를 입력하여 해당 캐릭터의 능력치 정보를 검색합니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
export const status = (serverId: Static.Server, characterId: string) => {
  let opt = {
    base: Query.UriBuilder(Static.BaseUri.Servers, serverId, "characters", characterId, "status"),
  };
  return Query.Request(opt);
};
