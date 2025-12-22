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
  wordType?: staticUtil.charactersWordType;
  limit?: number;
}

export interface ITimeLine extends BaseParams {
  serverId?: staticUtil.server;
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
  wordType?: staticUtil.auctionWordType;
  wordShort?: boolean;
  q?: IAuctionQuery;
}

export interface IAuctionSort {
  unitPrice?: staticUtil.sort;
  reinforce?: staticUtil.sort;
  auctionNo?: staticUtil.sort;
}

export interface IAuctionQuery {
  minLevel?: number;
  maxLevel?: number;
  raity?: staticUtil.rarity;
  reinforceTypeId: staticUtil.reinforceType;
  minReinforce?: number;
  maxReinforce?: number;
  minRefine?: number;
  maxRefine?: number;
  minFame?: number;
  maxFame?: number;
}

export interface IActionSoldOption extends BaseParams {
  limit?: number;
  wordType?: staticUtil.auctionWordType;
  wordShort?: boolean;
  itemId?: string;
  itemName?: string;
  sort?: IAuctionSort;
}

export interface IItem extends BaseParams {
  limit?: number;
  itemName?: string;
  hashtag?: string[];
  wordType?: staticUtil.auctionWordType;
  q?: IItemQuery;
}

export interface IItemQuery {
  minLevel?: number;
  maxLevel?: number;
  rarity?: staticUtil.rarity;
}

export interface ISetItem extends BaseParams {
  setItemName?: string;
  limit?: number;
  wordType?: staticUtil.auctionWordType;
}

export interface ISkill extends BaseParams {
  jobGrowId: string;
}
