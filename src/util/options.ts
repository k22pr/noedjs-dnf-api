export interface options {
  key: string;
  hideOnErrorApiKey: boolean;
  hidekeyText: string;
  axiosTimeout: number;
  returnJSON: boolean;
  responeHeader: boolean;
}
let defaultOption: options = {
  key: "",
  hideOnErrorApiKey: true,
  hidekeyText: "{HIDEKEY}",
  axiosTimeout: 5000,
  returnJSON: false,
  responeHeader: false
};
export default defaultOption;
