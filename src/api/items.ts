import type * as Model from "../model";
import { type Params, Query, Static } from "../util";

/**
 * 현재 인게임에서 획득 가능한 아이템의 경우만 검색 가능합니다.
 *
 * @param {string} itemName 검색할 아이템의 명칭
 * @param {string} params 선택적 요청변수의 Object입니다.
 */
export const item = async (
  itemName: string,
  params: Params.IItem = {},
): Promise<Model.DnfResponse<Model.Item.Item[]>> => {
  //   if (params === undefined) params = {};
  params.itemName = itemName;
  //   if (query) params.q = Query.makeItemQuery(query);
  //let querystring =
  const opt = {
    base: Query.UriBuilder(Static.BaseUri.Item),
    params: params,
  };
  return await Query.Request<Model.Item.Item[]>(opt);
};
/**
 * 해당하는 아이템의 상세정보를 요청합니다.
 *
 * @param {string} itemId 검색할 아이템의 ID
 */
export const detail = (
  itemId: string,
): Promise<Model.DnfResponse<Model.Item.Detail>> => {
  const opt = {
    base: Query.UriBuilder(Static.BaseUri.Item, itemId),
  };
  return Query.Request<Model.Item.Detail>(opt);
};
