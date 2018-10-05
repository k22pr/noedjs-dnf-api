"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _request = _interopRequireDefault(require("../request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setitems = {
  /**
   * 세트 아이템 정보를 세트의 이름으로 검색합니다.
   *
   * @param {string} setItemName 세트 아이템의 이름입니다.
   * @param {object} params 선택적 요청변수의 Object입니다.
   */
  setitem: function setitem(setItemName, params) {
    if (params === undefined) params = {};
    params.setItemName = setItemName;
    var opt = {
      base: "df/setitems",
      params: params
    };
    return (0, _request.default)(opt);
  },

  /**
   * 세트 ID로 세트 아이템 정보를 받아옵니다.
   *
   * @param {string} setItemId 세트 아이템의 ID입니다.
   */
  detail: function detail(setItemId) {
    var opt = {
      base: "df/setitems/".concat(setItemId)
    };
    return (0, _request.default)(opt);
  }
};
var _default = setitems;
exports.default = _default;