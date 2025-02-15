export interface IConfig {
  key: string | undefined;
  hideOnErrorApiKey: boolean;
  hideKeyText: string;
  timeout: number;
  returnJSON: boolean;
  responseHeader: boolean;
  showURL: boolean;
}
// biome-ignore lint/style/useConst: <explanation>
let defaultConfig: IConfig = {
  key: "",
  hideOnErrorApiKey: true,
  hideKeyText: "{HIDE_KEY}",
  timeout: 5000,
  returnJSON: false,
  responseHeader: false,
  showURL: false,
};
export default defaultConfig;
