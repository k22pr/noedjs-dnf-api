import type * as Static from "../util/static";
import type { INameValue } from "./";
export declare enum ItemDetailKind {
    Material = "material",
    Equip = "equip"
}
/** 아이템 인터페이스 */
export interface IItem {
    itemId: string;
    itemName: string;
    itemRarity: Static.rarity;
    itemType: string;
    itemTypeDetail: string;
    itemAvailableLevel: number;
}
/** 아이템 상세 인터페이스(합성 타입) */
export type IDetail = IMaterialDetail | IEquipDetail;
/** 재료 아이템 상세 인터페이스 */
export interface IMaterialDetail {
    kind: ItemDetailKind.Material;
    itemId: string;
    itemName: string;
    itemRarity: string;
    itemTypeId: string;
    itemType: string;
    itemTypeDetailId: string;
    itemTypeDetail: string;
    itemAvailableLevel: number;
    itemExplain: string;
    itemExplainDetail: string;
    itemFlavorText: string;
    fame: number;
    setItemId: string | null;
    setItemName: string | null;
    obtainInfo: IObtainInfo;
}
/** 장비 아이템 상세 인터페이스 */
export interface IEquipDetail {
    kind: ItemDetailKind.Equip;
    itemId: string;
    itemName: string;
    itemRarity: string;
    itemTypeId: string;
    itemType: string;
    itemTypeDetailId: string;
    itemTypeDetail: string;
    itemAvailableLevel: number;
    itemExplain: string;
    itemExplainDetail: string;
    itemFlavorText: string;
    fame: number;
    setItemId: string | null;
    setItemName: string | null;
    itemStatus: INameValue[];
    tune: ITune;
    itemBuff: IItemBuff;
    hashtag: string[];
    obtainInfo: IObtainInfoDetail;
}
/** 튠 정보 인터페이스 */
export interface ITune {
    level: number;
    setPoint: number;
}
/** 아이템 버프 인터페이스 */
export interface IItemBuff {
    explain: string;
    explainDetail: string;
    reinforceSkill: any[];
    status: any | null;
}
/** 획득 정보 인터페이스 */
export interface IObtainInfo {
    dungeon: string | null;
    shop: IShopInfo[];
}
/** 획득 상세 정보 인터페이스 */
export interface IObtainInfoDetail {
    dungeon: IDungeon[];
    shop: IShopDetail[];
}
/** 던전 정보 인터페이스 */
export interface IDungeon {
    type: string;
    rows: IDungeonRow[];
}
/** 던전 행 인터페이스 */
export interface IDungeonRow {
    name: string;
}
/** 상점 정보 인터페이스 */
export interface IShopInfo {
    type: string;
}
/** 상점 상세 정보 인터페이스 */
export interface IShopDetail {
    rows: IShopRow[];
}
/** 상점 행 인터페이스 */
export interface IShopRow {
    name: string;
    details: string[];
}
