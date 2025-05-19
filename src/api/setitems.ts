import type * as Model from "../model";
import { type params, query, staticUtil } from "../util";

/**
 * 세트 아이템 정보를 세트의 이름으로 검색합니다.
 *
 * @param {string} setItemName 세트 아이템의 이름입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export const setitem = (setItemName: string, params: params.ISetItem = {}) => {
  params.setItemName = setItemName;
  const opt = {
    base: query.UriBuilder(staticUtil.baseUri.SetItem),
    params: params,
  };
  return query.Request<Model.setItem.ISetItem[]>(opt);
};

/**
 * 세트 ID로 세트 아이템 정보를 받아옵니다.
 *
 * @param {string} setItemId 세트 아이템의 ID입니다.
 */
export const detail = (setItemId: string) => {
  const opt = {
    base: query.UriBuilder(staticUtil.baseUri.SetItem, setItemId),
  };
  return query.Request<Model.setItem.IDetail>(opt);
};
