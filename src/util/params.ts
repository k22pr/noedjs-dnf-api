import type * as staticUtil from "./static";

// 기본 파라미터 타입
export type ParamValue = string | number | boolean | undefined;

// 인덱스 시그니처가 있는 기본 인터페이스
export interface BaseParams {
  [key: string]: ParamValue | ParamValue[] | object | undefined;
}

export interface QueryOptions<T = BaseParams> {
  base: string;
  params?: T;
}

export interface ICharParams extends BaseParams {
  characterName?: string;
  jobId?: string;
  jobGrowId?: string;
  isAllJobGrow?: boolean;
  wordType?: staticUtil.CharactersWordType;
  limit?: number;
}

export interface ITimeLine extends BaseParams {
  serverId?: staticUtil.Server;
  characterId?: string;
  startDate?: Date;
  endDate?: Date;
  limit?: number;
  code?: string[];
  next?: string;
}

export interface IAuction extends BaseParams {
  limit?: number;
  sort?: IAuctionSort;
  itemId?: string;
  itemName?: string;
  wordType?: staticUtil.AuctionWordType;
  wordShort?: boolean;
  q?: IAuctionQuery;
}

export interface IAuctionSort {
  unitPrice?: staticUtil.Sort;
  reinforce?: staticUtil.Sort;
  auctionNo?: staticUtil.Sort;
}

export interface IAuctionQuery {
  minLevel?: number;
  maxLevel?: number;
  rarity?: staticUtil.Rarity;
  reinforceTypeId: staticUtil.ReinforceType;
  minReinforce?: number;
  maxReinforce?: number;
  minRefine?: number;
  maxRefine?: number;
  minFame?: number;
  maxFame?: number;
}

export interface IAuctionSoldOption extends BaseParams {
  limit?: number;
  wordType?: staticUtil.AuctionWordType;
  wordShort?: boolean;
  itemId?: string;
  itemName?: string;
  sort?: IAuctionSort;
}

export interface IItem extends BaseParams {
  limit?: number;
  itemName?: string;
  hashtag?: string[];
  wordType?: staticUtil.AuctionWordType;
  q?: IItemQuery;
}

export interface IItemQuery {
  minLevel?: number;
  maxLevel?: number;
  rarity?: staticUtil.Rarity;
}

export interface ISetItem extends BaseParams {
  setItemName?: string;
  limit?: number;
  wordType?: staticUtil.AuctionWordType;
}

export interface ISkill extends BaseParams {
  jobGrowId: string;
}

/** 캐릭터 명성 검색 파라미터 */
export interface ICharactersFame extends BaseParams {
  minFame?: number;
  maxFame?: number;
  jobId?: string;
  jobGrowId?: string;
  isAllJobGrow?: boolean;
  isBuff?: boolean;
  limit?: number;
}

/** 아바타 마켓 상품 검색 파라미터 */
export interface IAvatarMarketSale extends BaseParams {
  limit?: number;
  sort?: IAvatarMarketSort;
  hashtag?: string[];
  title?: string;
  wordType?: staticUtil.WordType;
  q?: IAvatarMarketQuery;
}

/** 아바타 마켓 시세 검색 파라미터 */
export interface IAvatarMarketSold extends BaseParams {
  limit?: number;
  sort?: IAvatarMarketSort;
  hashtag?: string[];
  title?: string;
  wordType?: staticUtil.WordType;
  q?: IAvatarMarketQuery;
}

/** 아바타 마켓 정렬 옵션 */
export interface IAvatarMarketSort {
  price?: staticUtil.Sort;
  goodsNo?: staticUtil.Sort;
}

/** 아바타 마켓 검색 쿼리 */
export interface IAvatarMarketQuery {
  jobId?: string;
  emblemCode?: number;
  avatarSet?: boolean;
  avatarRarity?: staticUtil.AvatarRarity;
  minPrice?: number;
  maxPrice?: number;
  minAvatarCount?: number;
  maxAvatarCount?: number;
}
