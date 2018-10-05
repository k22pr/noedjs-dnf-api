"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _request = _interopRequireDefault(require("../request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = {
  /**
   * 현재 인게임에서 획득 가능한 아이템의 경우만 검색 가능합니다.
   *
   * @param {string} itemName 검색할 아이템의 명칭
   * @param {string} params 선택적 요청변수의 Object입니다.
   * @param {string} query 선택적 요청변수의 Object입니다. (실제 요청의 q에 해당하는 부분입니다.)
   */
  item: function item(itemName, params, query) {
    if (params === undefined) params = {};
    params.itemName = itemName;
    if (query) params.q = makeItemQuery(query); //let querystring =

    var opt = {
      base: "df/items",
      params: params
    };
    return (0, _request.default)(opt);
  },

  /**
   * 해당하는 아이템의 상세정보를 요청합니다.
   *
   * @param {string} itemId 검색할 아이템의 ID
   */
  detail: function detail(itemId) {
    var opt = {
      base: "df/items/".concat(itemId)
    };
    return (0, _request.default)(opt);
  }
};
var _default = items;
exports.default = _default;