import type * as Model from "../model";
import { type Params, Query, Static } from "../util";

/**
 * 해당하는 아이템의 상세정보를 요청합니다.
 *
 * @param {string} itemId 검색할 아이템의 ID
 */
export const items = (itemIdList: string[]) => {
  const opt = {
    base: Query.UriBuilder(Static.BaseUri.Multi, "items"),
    params: {
      itemIds: itemIdList.join(","),
    },
  };
  return Query.Request<Model.Item.Detail[]>(opt);
};
