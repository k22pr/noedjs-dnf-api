import { Params } from "../util";
import * as Model from "../model";
/**
 * 세트 아이템 정보를 세트의 이름으로 검색합니다.
 *
 * @param {string} setItemName 세트 아이템의 이름입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export declare const setitem: (setItemName: string, params?: Params.ISetItem) => Promise<Model.DnfResponse<Model.SetItem.SetItem[]>>;
/**
 * 세트 ID로 세트 아이템 정보를 받아옵니다.
 *
 * @param {string} setItemId 세트 아이템의 ID입니다.
 */
export declare const detail: (setItemId: string) => Promise<Model.DnfResponse<Model.SetItem.Detail>>;
