"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("./config/config"));

var _characters = _interopRequireDefault(require("./api/characters"));

var _auction = _interopRequireDefault(require("./api/auction"));

var _items = _interopRequireDefault(require("./api/items"));

var _setitems = _interopRequireDefault(require("./api/setitems"));

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dnfApi = {
  opt: {},
  servers: function servers() {
    var opt = {
      base: "df/servers"
    };
    return (0, _request.default)(opt);
  },
  characters: _characters.default,
  auction: _auction.default,
  items: _items.default,
  jobs: function jobs() {
    var opt = {
      base: "df/jobs"
    };
    return (0, _request.default)(opt);
  },
  setitems: _setitems.default,
  setOptions: function setOptions(opt) {
    //자신의 API키
    this.opt.key = opt.key || ""; //respone오류 에서 자신의 API KEY갑을 숨겨서 표시합니다.

    this.opt.hideOnErrorApiKey = opt.hideOnErrorApiKey || true;
    this.opt.hidekeyText = opt.hidekeyText || "{HIDEKEY}"; //요청후 기다리는 최대 시간입니다 (ms)

    this.opt.axiosTimeout = opt.axiosTimeout || 5000; //응답에 대한 정보를 JSON형태로 받습니다.

    this.opt.returnJSON = opt.returnJSON || false; //응답내용을 상세하게 출력하도록 변경합니다.

    this.opt.responeHeader = opt.responeHeader || false;
  }
};
dnfApi.config = _config.default; //dnfApi.prototype.config = config;
//console.log(dnfApi.opt);
//dnfApi.prototype.opt = dnfApi.opt;

var _default = dnfApi;
exports.default = _default;