import type * as model from "../model";
import { type params, query, staticUtil } from "../util";

/**
 * 현재 인게임에서 획득 가능한 아이템의 경우만 검색 가능합니다.
 *
 * @param {string} itemName 검색할 아이템의 명칭
 * @param {string} params 선택적 요청변수의 Object입니다.
 */
export const item = async (itemName: string, params: params.IItem = {}) => {
  //   if (params === undefined) params = {};
  params.itemName = itemName;
  //   if (query) params.q = query.makeItemQuery(query);
  //let querystring =
  const opt = {
    base: query.UriBuilder(staticUtil.baseUri.Item),
    params: {
      ...params,
      ...(params.hashtag
        ? { hashtag: query.QueryBuilder(params.hashtag ?? []) }
        : {}),
    },
  };
  return await query.Request<model.IDnfResponse<model.item.IItem>>(opt);
};
/**
 * 해당하는 아이템의 상세정보를 요청합니다.
 *
 * @param {string} itemId 검색할 아이템의 ID
 */
export const detail = (itemId: string) => {
  const opt = {
    base: query.UriBuilder(staticUtil.baseUri.Item, itemId),
  };
  return query.Request<model.IDnfResponse<model.item.IDetail>>(opt);
};

/**
 * 26. 아이템 상점 판매 정보 조회
 * 인게임 백과사전 기준의 상점 판매 95레벨 에픽, 100레벨 이상 유니크, 레전더리, 에픽 장비가 조회 가능 합니다.
 *
 * @param {string} itemId 검색할 아이템의 ID
 */
// export const shop = (itemId: string) => {
//   const opt = {
//     base: query.UriBuilder(staticUtil.BaseUri.Item, itemId),
//   };
//   return query.Request<model.item.detail>(opt);
// };
