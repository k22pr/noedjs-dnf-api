"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _request = _interopRequireDefault(require("../request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equip = {
  /**
   * 해당 캐릭터가 장착한 장비 정보를 받아옵니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  equipment: function equipment(serverId, characterId) {
    var opt = {
      base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/equip/equipment")
    };
    return (0, _request.default)(opt);
  },

  /**
   * 해당 캐릭터가 장착한 아바타 정보를 받아옵니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  avatar: function avatar(serverId, characterId) {
    var opt = {
      base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/equip/avatar")
    };
    return (0, _request.default)(opt);
  },

  /**
   * 해당 캐릭터가 장착한 크리쳐 정보를 받아옵니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  creature: function creature(serverId, characterId) {
    var opt = {
      base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/equip/creature")
    };
    return (0, _request.default)(opt);
  },

  /**
   * 해당 캐릭터가 장착한 휘장 정보를 받아옵니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  flag: function flag(serverId, characterId) {
    var opt = {
      base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/equip/flag")
    };
    return (0, _request.default)(opt);
  }
};
var _default = equip;
exports.default = _default;