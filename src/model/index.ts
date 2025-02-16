import * as Char from "./character";
import * as Item from "./item";
import * as SetItem from "./setitem";

export { Char, Item, SetItem };

export type DnfErrorResponse = {
  url: string;
  status: number;
  statusText: string;
  code: string;
  message: string;
};

export type DnfSuccess<T> = {
  data: T;
  error?: never;
};

export type DnfError = {
  data?: never;
  error: DnfErrorResponse;
};

export type DnfResponse<T> = DnfSuccess<T> | DnfError;

export type Auction = {
  auctionNo: number;
  regDate: Date;
  expireDate: Date;
  itemId: string;
  itemName: string;
  itemAvailableLevel: number;
  itemRarity: string;
  itemTypeId: string;
  itemType: string;
  itemTypeDetailId: string;
  itemTypeDetail: string;
  refine: number;
  reinforce: number;
  amplificationName: string;
  fame: number;
  count: number;
  regCount: number;
  price: number;
  currentPrice: number;
  unitPrice: number;
  averagePrice: number;
  upgrade?: number;
  upgradeMax?: number;
};

export type AuctionSolid = {
  soldDate: string;
  itemId: string;
  itemName: string;
  itemAvailableLevel: number;
  itemRarity: string;
  itemTypeId: string;
  itemType: string;
  itemTypeDetailId: string;
  itemTypeDetail: string;
  refine: number;
  reinforce: number;
  amplificationName: string | null;
  fame: number;
  count: number;
  price: number;
  unitPrice: number;
  upgrade?: number;
  upgradeMax?: number;
};

export type Rows<T> = {
  rows: T[];
};

export type Server = {
  serverId: string;
  serverName: string;
};

export type NameValue = {
  name: string;
  value: string | number;
};
