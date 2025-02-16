export interface IConfig {
    key: string | undefined;
    hideOnErrorApiKey: boolean;
    hideKeyText: string;
    timeout: number;
    returnJSON: boolean;
    responseHeader: boolean;
    showURL: boolean;
}
declare let defaultConfig: IConfig;
export default defaultConfig;
