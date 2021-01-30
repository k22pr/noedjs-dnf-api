import { Query, Static, Params } from "../util";
import * as Model from "../model";

/**
 * 경매장에 등록된 아이템을 "아이템 이름"을 기준으로 받아옵니다
 *
 * @param {string} itemName 검색할 아이템의 이름입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export const itemName = (itemName: string, params: Params.IAuction = {}): Promise<Model.DnfResponse<Model.Auction[]>> => {
  params.itemName = itemName;
  let opt = {
    base: Query.UriBuilder(Static.BaseUri.Auction),
    params,
  };
  return Query.Request<Model.Auction[]>(opt);
};

/**
 * 경매장에 등록된 아이템을 "아이템 아이디"을 기준으로 받아옵니다
 *
 * @param {string} itemID 검색할 아이템의 ID입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export const itemId = (itemId: string, params: Params.IAuction = {}): Promise<Model.DnfResponse<Model.Auction[]>> => {
  params.itemId = itemId;
  let opt = {
    base: Query.UriBuilder(Static.BaseUri.Auction),
    params: params,
  };
  return Query.Request<Model.Auction[]>(opt);
};
/**
 * 경매장에 등록된 경매장번호로 받아옵니다.
 *
 * @param {Number} auctionNo 검색할 경매장 번호입니다.
 */
export const no = (auctionNo: number): Promise<Model.DnfResponse<Model.Auction>> => {
  let opt = {
    base: Query.UriBuilder(Static.BaseUri.Auction, auctionNo),
  };
  return Query.Request<Model.Auction>(opt);
};

export const auctionSoldName = (itemName: string, params: Params.IActionSoldOption = {}) => {
  params.itemName = itemName;
  let opt = {
    base: Query.UriBuilder(Static.BaseUri.AuctionSold),
    params,
  };
  return Query.Request<Model.AuctionSolid>(opt);
};

export const auctionSoldId = (itemId: string, params: Params.IActionSoldOption = {}) => {
  params.itemId = itemId;
  let opt = {
    base: Query.UriBuilder(Static.BaseUri.AuctionSold),
    params,
  };
  return Query.Request<Model.AuctionSolid>(opt);
};
