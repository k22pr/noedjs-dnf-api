import type * as model from "../model";
import { type params, query, staticUtil } from "../util";

/**
 * 19. 아바타 마켓 상품 검색
 * hashtag 정보는 "아바타 마켓 해시태그 조회 API"를 통해서 확인 가능합니다.
 *
 * @param {object} params 요청변수 Object
 */
export const sale = (params: params.IAvatarMarketSale = {}) => {
  const opt = {
    base: query.UriBuilder(staticUtil.baseUri.AvatarMarket, "sale"),
    params: {
      ...params,
      ...(params.hashtag
        ? { hashtag: query.QueryBuilder(params.hashtag) }
        : {}),
    },
  };
  return query.Request<model.IRows<model.avatarMarket.ISale>>(opt);
};

/**
 * 20. 아바타 마켓 상품 조회
 *
 * @param {number} goodsNo 아바타 마켓 등록 번호
 */
export const saleDetail = (goodsNo: number) => {
  const opt = {
    base: query.UriBuilder(staticUtil.baseUri.AvatarMarket, "sale", goodsNo),
  };
  return query.Request<model.avatarMarket.ISaleDetail>(opt);
};

/**
 * 21. 아바타 마켓 상품 시세 검색
 * hashtag 정보는 "아바타 마켓 해시태그 조회 API"를 통해서 확인 가능합니다.
 *
 * @param {object} params 요청변수 Object
 */
export const sold = (params: params.IAvatarMarketSold = {}) => {
  const opt = {
    base: query.UriBuilder(staticUtil.baseUri.AvatarMarket, "sold"),
    params: {
      ...params,
      ...(params.hashtag
        ? { hashtag: query.QueryBuilder(params.hashtag) }
        : {}),
    },
  };
  return query.Request<model.IRows<model.avatarMarket.ISold>>(opt);
};

/**
 * 22. 아바타 마켓 상품 시세 조회
 *
 * @param {number} goodsNo 아바타 마켓 등록 번호
 */
export const soldDetail = (goodsNo: number) => {
  const opt = {
    base: query.UriBuilder(staticUtil.baseUri.AvatarMarket, "sold", goodsNo),
  };
  return query.Request<model.avatarMarket.ISoldDetail>(opt);
};

/**
 * 23. 아바타 마켓 해시태그 조회
 *
 * @param {string} hashtagType 해시태그 타입 (category: 카테고리, mood: 분위기)
 */
export const hashtag = (hashtagType?: staticUtil.hashtagType) => {
  const opt = {
    base: query.UriBuilder(staticUtil.baseUri.AvatarMarket, "hashtag"),
    params: hashtagType ? { hashtagType } : {},
  };
  return query.Request<model.avatarMarket.IHashtag>(opt);
};
