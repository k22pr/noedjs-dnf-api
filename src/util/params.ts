import type * as staticUtil from "./static";
export interface QueryOptions<T = any> {
  base: string;
  params?: T;
}
export interface ICharParams {
  characterName?: string;
  jobId?: string;
  jobGrowId?: string;
  isAllJobGrow?: boolean;
  wordType?: staticUtil.charactersWordType;
  limit?: number;
}

export interface ITimeLine {
  serverId?: staticUtil.server;
  characterId?: string;
  startDate?: Date;
  endDate?: Date;
  limit?: number;
  code?: string[];
  next?: string;
}

export interface IAuction {
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

export interface IActionSoldOption {
  limit?: number;
  wordType?: staticUtil.auctionWordType;
  wordShort?: boolean;
  itemId?: string;
  itemName?: string;
  sort?: IAuctionSort;
}

export interface IItem {
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
  // trade?: boolean;
}

export interface ISetItem {
  setItemName?: string;
  limit?: number;
  wordType?: staticUtil.auctionWordType;
}
export interface ISkill {
  jobGrowId: string;
}
