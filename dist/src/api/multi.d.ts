import type * as Model from "../model";
/**
 * 해당하는 아이템의 상세정보를 요청합니다.
 *
 * @param {string} itemId 검색할 아이템의 ID
 */
export declare const items: (itemIdList: string[]) => Promise<Model.IDnfResponse<Model.item.IDetail[]>>;
