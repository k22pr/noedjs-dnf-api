import * as Static from "../util/static";
export declare type Item = {
    itemId: string;
    itemName: string;
    itemRarity: Static.Rarity;
    itemType: string;
    itemTypeDetail: string;
    itemAvailableLevel: number;
};
export declare type Detail = {
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
