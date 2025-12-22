import type * as model from "../model";
import { type params } from "../util";
/**
 * 경매장에 등록된 아이템을 "아이템 이름"을 기준으로 받아옵니다
 *
 * @param {string} itemName 검색할 아이템의 이름입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export declare const itemName: (itemName: string, params?: params.IAuction) => Promise<model.IDnfResponse<model.IRows<model.IAuction>>>;
/**
 * 경매장에 등록된 아이템을 "아이템 아이디"을 기준으로 받아옵니다
 *
 * @param {string} itemID 검색할 아이템의 ID입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export declare const itemId: (itemId: string, params?: params.IAuction) => Promise<model.IDnfResponse<model.IRows<model.IAuction>>>;
/**
 * 경매장에 등록된 경매장번호로 받아옵니다.
 *
 * @param {Number} auctionNo 검색할 경매장 번호입니다.
 */
export declare const no: (auctionNo: number) => Promise<model.IDnfResponse<model.IAuction>>;
export declare const auctionSoldName: (itemName: string, params?: params.IActionSoldOption) => Promise<model.IDnfResponse<model.IRows<model.IAuctionSolid>>>;
export declare const auctionSoldId: (itemId: string, params?: params.IActionSoldOption) => Promise<model.IDnfResponse<model.IRows<model.IAuctionSolid>>>;
