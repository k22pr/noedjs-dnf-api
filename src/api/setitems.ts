import type * as Model from "../model";
import { type Params, Query, Static } from "../util";

/**
 * 세트 아이템 정보를 세트의 이름으로 검색합니다.
 *
 * @param {string} setItemName 세트 아이템의 이름입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export const setitem = (
  setItemName: string,
  params: Params.ISetItem = {},
): Promise<Model.DnfResponse<Model.SetItem.SetItem[]>> => {
  params.setItemName = setItemName;
  const opt = {
    base: Query.UriBuilder(Static.BaseUri.SetItem),
    params: params,
  };
  return Query.Request<Model.SetItem.SetItem[]>(opt);
};

/**
 * 세트 ID로 세트 아이템 정보를 받아옵니다.
 *
 * @param {string} setItemId 세트 아이템의 ID입니다.
 */
export const detail = (
  setItemId: string,
): Promise<Model.DnfResponse<Model.SetItem.Detail>> => {
  const opt = {
    base: Query.UriBuilder(Static.BaseUri.SetItem, setItemId),
  };
  return Query.Request<Model.SetItem.Detail>(opt);
};
