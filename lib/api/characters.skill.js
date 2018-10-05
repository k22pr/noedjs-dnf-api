"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _request = _interopRequireDefault(require("../request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var skill = {
  /**
   *  아이템 및 장비를 통한 스킬 강화 제외 입니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  style: function style(serverId, characterId) {
    var opt = {
      base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/skill/style")
    };
    return (0, _request.default)(opt);
  },

  /**
   * 캐릭터 '버프 스킬 강화 장착 장비'(스위칭) 를 조회합니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  equipment: function equipment(serverId, characterId) {
    var opt = {
      base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/skill/buff/equip/equipment")
    };
    return (0, _request.default)(opt);
  },

  /**
   * 캐릭터 '버프 스킬 강화 장착 아바타'(스위칭) 를 조회합니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  avatar: function avatar(serverId, characterId) {
    var opt = {
      base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/skill/buff/equip/avatar")
    };
    return (0, _request.default)(opt);
  },

  /**
   * 캐릭터 '버프 스킬 강화 장착 크리쳐'(스위칭) 를 조회합니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  creature: function creature(serverId, characterId) {
    var opt = {
      base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/skill/buff/equip/creature")
    };
    return (0, _request.default)(opt);
  }
};
var _default = skill;
exports.default = _default;