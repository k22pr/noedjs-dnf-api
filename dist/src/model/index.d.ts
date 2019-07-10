import * as Char from "./character";
import * as Item from "./item";
import * as SetItem from "./setitem";
export { Char, Item, SetItem };
export declare type DnfErrorResponse = {
    url: string;
    status: number;
    statusText: string;
    code: string;
    message: string;
};
export declare type DnfResponse<T> = {
    data?: T;
    error?: DnfErrorResponse;
};
export declare type Auction = {
    auctionNo: number;
    regDate: Date;
    expireDate: Date;
    itemId: string;
    itemName: string;
    itemAvailableLevel: number;
    itemRarity: string;
    itemType: string;
    itemTypeDetail: string;
    refine: number;
    reinforce: number;
    amplificationName: string;
    count: number;
    price: number;
    currentPrice: number;
    unitPrice: number;
    averagePrice: number;
};
export declare type Server = {
    serverId: string;
    serverName: string;
};
