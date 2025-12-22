export interface IConfig {
    key: string;
    hideOnErrorApiKey: boolean;
    hideKeyText: string;
    timeout: number;
    returnJSON: boolean;
    responseHeader: boolean;
    showURL: boolean;
    maxRequestsPerSecond: number;
}
export declare const config: IConfig;
/**
 * 설정을 업데이트합니다.
 * @param newConfig 업데이트할 설정 값
 */
export declare function setConfig(newConfig: Partial<IConfig>): void;
/**
 * 설정을 기본값으로 초기화합니다.
 */
export declare function resetConfig(): void;
export default config;
