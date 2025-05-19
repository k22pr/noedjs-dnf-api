import * as char from "./character";
import * as item from "./item";
import * as setItem from "./setitem";

export { char, item, setItem };

/** 에러 응답 인터페이스 */
export interface IDnfErrorResponse {
  url: string;
  status: number;
  statusText: string;
  code: string;
  message: string;
}

/** 성공 응답 인터페이스 */
export interface IDnfSuccess<T> {
  data: T;
  error?: never;
}

/** 에러 정보 인터페이스 */
export interface IDnfError {
  data?: never;
  error: IDnfErrorResponse;
}

/** 응답 타입(합성 타입) */
export type IDnfResponse<T> = IDnfSuccess<T> | IDnfError;

/** 경매장 아이템 인터페이스 */
export interface IAuction {
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
}

/** 판매 완료 아이템 인터페이스 */
export interface IAuctionSolid {
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
}

/** 행 배열 인터페이스 */
export interface IRows<T> {
  rows: T[];
}

/** 서버 정보 인터페이스 */
export interface IServer {
  serverId: string;
  serverName: string;
}

/** 이름-값 쌍 인터페이스 */
export interface INameValue {
  name: string;
  value: string | number;
}
