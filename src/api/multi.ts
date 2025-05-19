import type * as Model from "../model";
import { type params, query, staticUtil } from "../util";

/**
 * 해당하는 아이템의 상세정보를 요청합니다.
 *
 * @param {string} itemId 검색할 아이템의 ID
 */
export const items = (itemIdList: string[]) => {
  const opt = {
    base: query.UriBuilder(staticUtil.baseUri.Multi, "items"),
    params: {
      itemIds: itemIdList.join(","),
    },
  };
  return query.Request<Model.item.IDetail[]>(opt);
};
