/** 세트 아이템 인터페이스 */
export interface ISetItem {
  setItemId: string;
  setItemName: string;
}

/** 세트 아이템 상세 인터페이스 */
export interface IDetail {
  setItemId: string;
  setItemName: string;
  setItems: [
    {
      slotId: string;
      slotName: string;
      itemId: string;
      itemName: string;
      itemRarity: string;
    },
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
        },
      ];
    },
  ];
}
