import type * as model from "../model";
import { type params, staticUtil } from "../util";
/**
 * 19. 아바타 마켓 상품 검색
 * hashtag 정보는 "아바타 마켓 해시태그 조회 API"를 통해서 확인 가능합니다.
 *
 * @param {object} params 요청변수 Object
 */
export declare const sale: (params?: params.IAvatarMarketSale) => Promise<model.IDnfResponse<model.IRows<model.avatarMarket.ISale>>>;
/**
 * 20. 아바타 마켓 상품 조회
 *
 * @param {number} goodsNo 아바타 마켓 등록 번호
 */
export declare const saleDetail: (goodsNo: number) => Promise<model.IDnfResponse<model.avatarMarket.ISaleDetail>>;
/**
 * 21. 아바타 마켓 상품 시세 검색
 * hashtag 정보는 "아바타 마켓 해시태그 조회 API"를 통해서 확인 가능합니다.
 *
 * @param {object} params 요청변수 Object
 */
export declare const sold: (params?: params.IAvatarMarketSold) => Promise<model.IDnfResponse<model.IRows<model.avatarMarket.ISold>>>;
/**
 * 22. 아바타 마켓 상품 시세 조회
 *
 * @param {number} goodsNo 아바타 마켓 등록 번호
 */
export declare const soldDetail: (goodsNo: number) => Promise<model.IDnfResponse<model.avatarMarket.ISoldDetail>>;
/**
 * 23. 아바타 마켓 해시태그 조회
 *
 * @param {string} hashtagType 해시태그 타입 (category: 카테고리, mood: 분위기)
 */
export declare const hashtag: (hashtagType?: staticUtil.HashtagType) => Promise<model.IDnfResponse<model.avatarMarket.IHashtag>>;
