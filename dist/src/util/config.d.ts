export interface IConfig {
    key: string;
    hideOnErrorApiKey: boolean;
    hidekeyText: string;
    axiosTimeout: number;
    returnJSON: boolean;
    responeHeader: boolean;
    showURL: boolean;
}
declare let defaultConfig: IConfig;
export default defaultConfig;
