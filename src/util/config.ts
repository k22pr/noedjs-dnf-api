export interface Config {
  key: string;
  hideOnErrorApiKey: boolean;
  hidekeyText: string;
  axiosTimeout: number;
  returnJSON: boolean;
  responeHeader: boolean;
}
let defaultConfig: Config = {
  key: "",
  hideOnErrorApiKey: true,
  hidekeyText: "{HIDEKEY}",
  axiosTimeout: 5000,
  returnJSON: false,
  responeHeader: false,
};
export default defaultConfig;
