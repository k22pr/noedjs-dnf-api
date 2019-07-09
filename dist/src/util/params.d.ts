import * as Static from "./static";
export interface QueryOptions {
    base: string;
    params?: any;
}
export interface ICharParams {
    characterName?: string;
    jobId?: string;
    jobGrowId?: string;
    wordType?: Static.CharactersWordType;
    limit?: number;
}
export interface ITimeLine {
    startDate?: Date;
    endDate?: Date;
    limit?: number;
    code?: string;
    next?: string;
}
export interface IAuction {
    limit?: number;
    sort?: IAuctionSort;
    itemId?: string;
    itemName?: string;
    wordType?: Static.AuctionWordType;
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
    minReinforce?: number;
    maxReinforce?: number;
    minRefine?: number;
    maxRefine?: number;
}
export interface IItem {
    limit?: number;
    itemName?: string;
    wordType?: Static.AuctionWordType;
    q?: IItemQuery;
}
export interface IItemQuery {
    minLevel?: number;
    maxLevel?: number;
    rarity?: Static.Rarity;
    trade?: boolean;
}
export interface ISetItem {
    setItemName?: string;
    limit?: number;
    wordType?: Static.AuctionWordType;
}
export interface ISkill {
    jobGrowId: string;
}
