import type * as model from "../model";
import { type params } from "../util";
/**
 * 경매장에 등록된 아이템을 "아이템 이름"을 기준으로 받아옵니다
 *
 * @param {string} itemName 검색할 아이템의 이름입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export declare const itemName: (itemName: string, params?: params.IAuction) => Promise<model.IDnfResponse<model.IRows<model.auction.IAuction>>>;
/**
 * 경매장에 등록된 아이템을 "아이템 아이디"을 기준으로 받아옵니다
 *
 * @param {string} itemID 검색할 아이템의 ID입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export declare const itemId: (itemId: string, params?: params.IAuction) => Promise<model.IDnfResponse<model.IRows<model.auction.IAuction>>>;
/**
 * 경매장에 등록된 경매장번호로 받아옵니다.
 *
 * @param {Number} auctionNo 검색할 경매장 번호입니다.
 */
export declare const no: (auctionNo: number) => Promise<model.IDnfResponse<model.auction.IAuction>>;
export declare const auctionSoldName: (itemName: string, params?: params.IAuctionSoldOption) => Promise<model.IDnfResponse<model.IRows<model.auction.IAuctionSolid>>>;
export declare const auctionSoldId: (itemId: string, params?: params.IAuctionSoldOption) => Promise<model.IDnfResponse<model.IRows<model.auction.IAuctionSolid>>>;
/**
 * 경매장에 등록된 아이템을 복수 "아이템 아이디"로 검색합니다 (최대 10개)
 *
 * @param {string[]} itemIds 검색할 아이템 ID 배열 (최대 10개)
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export declare const itemIds: (itemIdList: string[], params?: params.IAuction) => Promise<model.IDnfResponse<model.IRows<model.auction.IAuction>>>;
/**
 * 경매장 시세를 복수 "아이템 아이디"로 검색합니다 (최대 10개)
 *
 * @param {string[]} itemIds 검색할 아이템 ID 배열 (최대 10개)
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export declare const auctionSoldIds: (itemIdList: string[], params?: params.IAuctionSoldOption) => Promise<model.IDnfResponse<model.IRows<model.auction.IAuctionSolid>>>;
