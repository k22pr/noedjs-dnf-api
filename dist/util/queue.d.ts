export declare class RequestQueue {
    private queue;
    private processing;
    private requestCount;
    private lastResetTime;
    /**
     * 큐에 요청을 추가합니다.
     * @param task 실행할 비동기 작업
     * @returns 작업 결과 Promise
     */
    add<T>(task: () => Promise<T>): Promise<T>;
    /**
     * 큐를 처리합니다.
     */
    private processQueue;
    private sleep;
    /**
     * 현재 큐 상태를 반환합니다.
     */
    get status(): {
        queueLength: number;
        requestCount: number;
        maxRequestsPerSecond: number;
    };
    /**
     * 큐를 초기화합니다.
     */
    clear(): void;
}
export declare const requestQueue: RequestQueue;
export default requestQueue;
