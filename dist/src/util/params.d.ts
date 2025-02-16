import type * as Static from "./static";
export interface QueryOptions<T = any> {
    base: string;
    params?: T;
}
export interface ICharParams {
    characterName?: string;
    jobId?: string;
    jobGrowId?: string;
    isAllJobGrow?: boolean;
    wordType?: Static.CharactersWordType;
    limit?: number;
}
export interface ITimeLine {
    serverId?: Static.Server;
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
    wordType?: Static.AuctionWordType;
    wordShort?: boolean;
    q?: IAuctionQuery;
}
export interface IAuctionSort {
    unitPrice?: Static.Sort;
    reinforce?: Static.Sort;
    auctionNo?: Static.Sort;
}
export interface IAuctionQuery {
    minLevel?: number;
    maxLevel?: number;
    raity?: Static.Rarity;
    reinforceTypeId: Static.reinforceType;
    minReinforce?: number;
    maxReinforce?: number;
    minRefine?: number;
    maxRefine?: number;
    minFame?: number;
    maxFame?: number;
}
export interface IActionSoldOption {
    limit?: number;
    wordType?: Static.AuctionWordType;
    wordShort?: boolean;
    itemId?: string;
    itemName?: string;
}
export interface IItem {
    limit?: number;
    itemName?: string;
    hashtag?: string[];
    wordType?: Static.AuctionWordType;
    q?: IItemQuery;
}
export interface IItemQuery {
    minLevel?: number;
    maxLevel?: number;
    rarity?: Static.Rarity;
}
export interface ISetItem {
    setItemName?: string;
    limit?: number;
    wordType?: Static.AuctionWordType;
}
export interface ISkill {
    jobGrowId: string;
}
