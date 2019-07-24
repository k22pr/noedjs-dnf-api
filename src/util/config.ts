export interface IConfig {
   key: string;
   hideOnErrorApiKey: boolean;
   hidekeyText: string;
   axiosTimeout: number;
   returnJSON: boolean;
   responeHeader: boolean;
   showURL: boolean
}
let defaultConfig: IConfig = {
   key: "",
   hideOnErrorApiKey: true,
   hidekeyText: "{HIDEKEY}",
   axiosTimeout: 5000,
   returnJSON: false,
   responeHeader: false,
   showURL: false
};
export default defaultConfig;
