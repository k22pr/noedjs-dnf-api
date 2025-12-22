// 설정 인터페이스
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

// 기본 설정값
const defaultConfig: IConfig = {
  key: "",
  hideOnErrorApiKey: true,
  hideKeyText: "{HIDE_KEY}",
  timeout: 5000,
  returnJSON: false,
  responseHeader: false,
  showURL: false,
  maxRequestsPerSecond: 1000,
};

// 현재 설정 (복사본)
export const config: IConfig = { ...defaultConfig };

/**
 * 설정을 업데이트합니다.
 * @param newConfig 업데이트할 설정 값
 */
export function setConfig(newConfig: Partial<IConfig>): void {
  Object.assign(config, newConfig);
}

/**
 * 설정을 기본값으로 초기화합니다.
 */
export function resetConfig(): void {
  Object.assign(config, defaultConfig);
}

export default config;
