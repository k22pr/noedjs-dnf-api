import type * as Model from "../model";
import { type Params } from "../util";
/**
 * 현재 인게임에서 획득 가능한 아이템의 경우만 검색 가능합니다.
 *
 * @param {string} itemName 검색할 아이템의 명칭
 * @param {string} params 선택적 요청변수의 Object입니다.
 */
export declare const item: (itemName: string, params?: Params.IItem) => Promise<Model.DnfResponse<Model.Rows<Model.Item.Item>>>;
/**
 * 해당하는 아이템의 상세정보를 요청합니다.
 *
 * @param {string} itemId 검색할 아이템의 ID
 */
export declare const detail: (itemId: string) => Promise<Model.DnfResponse<Model.Item.Detail>>;
/**
 * 26. 아이템 상점 판매 정보 조회
 * 인게임 백과사전 기준의 상점 판매 95레벨 에픽, 100레벨 이상 유니크, 레전더리, 에픽 장비가 조회 가능 합니다.
 *
 * @param {string} itemId 검색할 아이템의 ID
 */
