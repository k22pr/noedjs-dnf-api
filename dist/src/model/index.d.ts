import * as Static from "../util/static";
import * as Char from "./character";
export { Char };
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
export declare type Item = {
    itemId: string;
    itemName: string;
    itemRarity: Static.Rarity;
    itemType: string;
    itemTypeDetail: string;
    itemAvailableLevel: number;
};
export declare type ItemDetail = {
    itemId: string;
    itemName: string;
    itemRarity: Static.Rarity;
    itemType: string;
    itemTypeDetail: string;
    itemAvailableLevel: number;
    itemObtainInfo: string;
    itemExplain: string;
    itemExplainDetail: string;
    itemFlavorText: string;
    setItemId: string;
    setItemName: string;
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
export declare type SetItem = {
    setItemId: string;
    setItemName: string;
};
export declare type SetItemDetail = {
    setItemId: string;
    setItemName: string;
    setItems: [{
        slotId: string;
        slotName: string;
        itemId: string;
        itemName: string;
        itemRarity: string;
    }];
    setItemOption: [{
        optionNo: number;
        explain: string;
        detailExplain: string;
        status: [{
            name: string;
            value: number;
        }];
    }];
};
