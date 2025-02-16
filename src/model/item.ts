import type * as Static from "../util/static";
import type { NameValue } from "./";

export enum ItemDetailKind {
  Material = "material",
  Equip = "equip",
}

export type Item = {
  itemId: string;
  itemName: string;
  itemRarity: Static.Rarity;
  itemType: string;
  itemTypeDetail: string;
  itemAvailableLevel: number;
};

export type Detail = MaterialDetail | EquipDetail;

export type MaterialDetail = {
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
  obtainInfo: ObtainInfo;
};

export type EquipDetail = {
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
  itemStatus: NameValue[];
  tune: Tune;
  itemBuff: ItemBuff;
  hashtag: string[];
  obtainInfo: ObtainInfoDetail;
};

export type Tune = {
  level: number;
  setPoint: number;
};

export type ItemBuff = {
  explain: string;
  explainDetail: string;
  reinforceSkill: any[];
  status: any | null;
};

export type ObtainInfo = {
  dungeon: string | null;
  shop: ShopInfo[];
};

export type ObtainInfoDetail = {
  dungeon: Dungeon[];
  shop: ShopDetail[];
};

export type Dungeon = {
  type: string;
  rows: DungeonRow[];
};

export type DungeonRow = {
  name: string;
};

export type ShopInfo = {
  type: string;
};

export type ShopDetail = {
  rows: ShopRow[];
};

export type ShopRow = {
  name: string;
  details: string[];
};
