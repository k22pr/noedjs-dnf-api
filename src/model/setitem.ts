export type SetItem = {
  setItemId: string;
  setItemName: string;
};

export type Detail = {
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
