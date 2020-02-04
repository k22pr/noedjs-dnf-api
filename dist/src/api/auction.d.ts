import { Params } from "../util";
import * as Model from "../model";
/**
 * 경매장에 등록된 아이템을 "아이템 이름"을 기준으로 받아옵니다
 *
 * @param {string} itemName 검색할 아이템의 이름입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export declare const itemName: (itemName: string, params?: Params.IAuction) => Promise<Model.DnfResponse<Model.Auction[]>>;
/**
 * 경매장에 등록된 아이템을 "아이템 아이디"을 기준으로 받아옵니다
 *
 * @param {string} itemID 검색할 아이템의 ID입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export declare const itemId: (itemId: string, params?: Params.IAuction) => Promise<Model.DnfResponse<Model.Auction[]>>;
/**
 * 경매장에 등록된 경매장번호로 받아옵니다.
 *
 * @param {Number} auctionNo 검색할 경매장 번호입니다.
 */
export declare const no: (auctionNo: number) => Promise<Model.DnfResponse<Model.Auction>>;
