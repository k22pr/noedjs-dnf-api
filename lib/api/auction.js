"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _request = _interopRequireDefault(require("../request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auction = {
  /**
   * 경매장에 등록된 아이템을 "아이템 이름"을 기준으로 받아옵니다
   *
   * @param {string} itemName 검색할 아이템의 이름입니다.
   * @param {object} params 선택적 요청변수의 Object입니다.
   * @param {object} query q에 해당하는 값입니다.
   */
  itemName: function itemName(_itemName, params, query) {
    if (params === undefined) params = {};
    params.itemName = _itemName;
    if (query) params.q = makeItemQuery(query); //let querystring =

    var opt = {
      base: "df/auction",
      params: params
    };
    return (0, _request.default)(opt);
  },

  /**
   * 경매장에 등록된 아이템을 "아이템 아이디"을 기준으로 받아옵니다
   *
   * @param {string} itemID 검색할 아이템의 ID입니다.
   * @param {object} params 선택적 요청변수의 Object입니다.
   * @param {object} query q에 해당하는 값입니다.
   */
  itemId: function itemId(_itemId, params, query) {
    if (params === undefined) params = {};
    params.itemId = _itemId;
    if (query) params.q = makeItemQuery(query);
    var opt = {
      base: "df/auction",
      params: params
    };
    return (0, _request.default)(opt);
  },

  /**
   * 경매장에 등록된 경매장번호로 받아옵니다.
   *
   * @param {Number} auctionNo 검색할 경매장 번호입니다.
   */
  no: function no(auctionNo) {
    var opt = {
      base: "df/auction/".concat(Number(auctionNo))
    };
    return (0, _request.default)(opt);
  }
};

function makeItemQuery(query) {
  return JSON.stringify(query).replace(/\"|\{|\}/gi, "");
}

var _default = auction;
exports.default = _default;