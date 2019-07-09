import * as Static from "../util/static";

import * as Char from "./character";

export { Char };

export type DnfErrorResponse = {
  url: string;
  status: number;
  statusText: string;
  code: string;
  message: string;
};
export type DnfResponse<T> = {
  data?: T;
  error?: DnfErrorResponse;
};

export type Item = {
  itemId: string;
  itemName: string;
  itemRarity: Static.Rarity;
  itemType: string;
  itemTypeDetail: string;
  itemAvailableLevel: number;
};

export type ItemDetail = {
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

export type SetItem = {
  setItemId: string;
  setItemName: string;
};

export type SetItemDetail = {
  setItemId: string;
  setItemName: string;
  setItems: [
    {
      slotId: string;
      slotName: string;
      itemId: string;
      itemName: string;
      itemRarity: string;
    }
  ];
  setItemOption: [
    {
      optionNo: number;
      explain: string;
      detailExplain: string;
      status: [
        {
          name: string;
          value: number;
        }
      ];
    }
  ];
};
