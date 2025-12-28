import * as auction from "./auction";
import * as avatarMarket from "./avatar-market";
import * as char from "./character";
import * as item from "./item";
import * as job from "./job";
import * as setItem from "./setitem";
export { char, item, setItem, auction, avatarMarket, job };
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
