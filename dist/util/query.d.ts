import type * as model from "../model";
import type { BaseParams } from "./params";
export interface RequestOptions {
    base: string;
    params?: BaseParams;
    url?: string;
}
/**
 * URI 경로를 빌드합니다.
 * @param args 경로 세그먼트들
 * @returns 결합된 URI 경로
 */
export declare function UriBuilder(...args: (string | number)[]): string;
/**
 * 쿼리 문자열을 빌드합니다.
 * @param query 쿼리 배열
 * @returns 쿼리 문자열
 */
export declare function QueryBuilder(query: (string | number)[]): string;
/**
 * 던전앤파이터 API 서버에 요청을 보내는 함수입니다.
 * @param opt 요청 옵션
 * @param method HTTP 메서드
 * @returns API 응답
 */
export declare function Request<T>(opt?: RequestOptions, method?: "GET" | "POST"): Promise<model.IDnfResponse<T>>;
/**
 * 아이템 쿼리를 생성합니다.
 * @param query 쿼리 문자열
 * @returns 인코딩된 쿼리
 */
export declare function makeItemQuery(query: string): string;
declare const _default: {
    UriBuilder: typeof UriBuilder;
    QueryBuilder: typeof QueryBuilder;
    Request: typeof Request;
    makeItemQuery: typeof makeItemQuery;
};
export default _default;
