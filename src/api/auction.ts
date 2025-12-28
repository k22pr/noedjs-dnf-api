import type * as model from "../model";
import { type params, query, staticUtil } from "../util";

/**
 * 경매장에 등록된 아이템을 "아이템 이름"을 기준으로 받아옵니다
 *
 * @param {string} itemName 검색할 아이템의 이름입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export const itemName = (itemName: string, params: params.IAuction = {}) => {
  params.itemName = itemName;
  const opt = {
    base: query.UriBuilder(staticUtil.BaseUri.Auction),
    params,
  };
  return query.Request<model.IRows<model.auction.IAuction>>(opt);
};

/**
 * 경매장에 등록된 아이템을 "아이템 아이디"을 기준으로 받아옵니다
 *
 * @param {string} itemID 검색할 아이템의 ID입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export const itemId = (itemId: string, params: params.IAuction = {}) => {
  params.itemId = itemId;
  const opt = {
    base: query.UriBuilder(staticUtil.BaseUri.Auction),
    params: params,
  };
  return query.Request<model.IRows<model.auction.IAuction>>(opt);
};
/**
 * 경매장에 등록된 경매장번호로 받아옵니다.
 *
 * @param {Number} auctionNo 검색할 경매장 번호입니다.
 */
export const no = (auctionNo: number) => {
  const opt = {
    base: query.UriBuilder(staticUtil.BaseUri.Auction, auctionNo),
  };
  return query.Request<model.auction.IAuction>(opt);
};

export const auctionSoldName = (
  itemName: string,
  params: params.IAuctionSoldOption = {}
) => {
  params.itemName = itemName;
  const opt = {
    base: query.UriBuilder(staticUtil.BaseUri.AuctionSold),
    params,
  };
  return query.Request<model.IRows<model.auction.IAuctionSolid>>(opt);
};

export const auctionSoldId = (
  itemId: string,
  params: params.IAuctionSoldOption = {}
) => {
  params.itemId = itemId;
  const opt = {
    base: query.UriBuilder(staticUtil.BaseUri.AuctionSold),
    params,
  };
  return query.Request<model.IRows<model.auction.IAuctionSolid>>(opt);
};

/**
 * 경매장에 등록된 아이템을 복수 "아이템 아이디"로 검색합니다 (최대 10개)
 *
 * @param {string[]} itemIds 검색할 아이템 ID 배열 (최대 10개)
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export const itemIds = (itemIdList: string[], params: params.IAuction = {}) => {
  const opt = {
    base: query.UriBuilder(staticUtil.BaseUri.Auction),
    params: {
      ...params,
      itemIds: itemIdList.join(","),
    },
  };
  return query.Request<model.IRows<model.auction.IAuction>>(opt);
};

/**
 * 경매장 시세를 복수 "아이템 아이디"로 검색합니다 (최대 10개)
 *
 * @param {string[]} itemIds 검색할 아이템 ID 배열 (최대 10개)
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export const auctionSoldIds = (
  itemIdList: string[],
  params: params.IAuctionSoldOption = {}
) => {
  const opt = {
    base: query.UriBuilder(staticUtil.BaseUri.AuctionSold),
    params: {
      ...params,
      itemIds: itemIdList.join(","),
    },
  };
  return query.Request<model.IRows<model.auction.IAuctionSolid>>(opt);
};
