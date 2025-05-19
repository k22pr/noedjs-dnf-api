import type * as model from "../model";
export default class Request {
    static UriBuilder(...args: any[]): string;
    static QueryBuilder(query: string[] | number[]): string;
    /**
     *  던전앤파이터 API 서버에 응답을 요청하는 함수 입니다.
     * 해당 함수를 직접 호출 하는것을 권장하지 않습니다.
     *
     * @param {object} opt (요청을 보낼 Parameter값)
     * @returns
     */
    static Request<T>(opt?: any, method?: "GET" | "POST"): Promise<model.IDnfResponse<T>>;
    static makeItemQuery(query: any): string;
}
