export interface Config {
    key: string;
    hideOnErrorApiKey: boolean;
    hidekeyText: string;
    axiosTimeout: number;
    returnJSON: boolean;
    responeHeader: boolean;
}
declare let defaultConfig: Config;
export default defaultConfig;
