import config from "./config/config";

import characters from "./api/characters";
import auction from "./api/auction";
import items from "./api/items";
import setitems from "./api/setitems";

import request from "./request";

const dnfApi = {
  opt: {},
  servers: () => {
    let opt = {
      base: "df/servers",
    };
    return request(opt);
  },
  characters: characters,
  auction: auction,
  items: items,
  jobs: () => {
    let opt = {
      base: "df/jobs",
    };
    return request(opt);
  },
  setitems: setitems,
  setOptions: function(opt) {
    //자신의 API키
    this.opt.key = opt.key || "";
    //respone오류 에서 자신의 API KEY갑을 숨겨서 표시합니다.
    this.opt.hideOnErrorApiKey = opt.hideOnErrorApiKey || true;
    this.opt.hidekeyText = opt.hidekeyText || "{HIDEKEY}";
    //요청후 기다리는 최대 시간입니다 (ms)
    this.opt.axiosTimeout = opt.axiosTimeout || 5000;
    //응답에 대한 정보를 JSON형태로 받습니다.
    this.opt.returnJSON = opt.returnJSON || false;
    //응답내용을 상세하게 출력하도록 변경합니다.
    this.opt.responeHeader = opt.responeHeader || false;
  },
};

dnfApi.config = config;
//dnfApi.prototype.config = config;
//console.log(dnfApi.opt);
//dnfApi.prototype.opt = dnfApi.opt;

export default dnfApi;
