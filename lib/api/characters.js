"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _request = _interopRequireDefault(require("../request"));

var _characters = _interopRequireDefault(require("./characters.equip"));

var _characters2 = _interopRequireDefault(require("./characters.skill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var characters = {
  /**
   * 서버 이름과 캐릭터 닉네임을 입력하여 해당 캐릭터를 검색합니다.
   *
   * @param {string} [serverId=""] 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} [characterName=""] 검색할 캐릭터의 이름입니다.
   * @param {object} [params={}] 선택적 요청변수의 Object입니다.
   */
  character: function character(serverId, characterName) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (params === undefined) params = {};
    params.characterName = characterName;
    var opt = {
      base: "df/servers/".concat(serverId, "/characters/"),
      params: params
    };
    return (0, _request.default)(opt);
  },

  /**
   * 캐릭터 ID를 입력하여 해당 캐릭터 정보를 받아옵니다
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  characterId: function characterId(serverId, _characterId) {
    var opt = {
      base: "df/servers/".concat(serverId, "/characters/").concat(_characterId)
    };
    return (0, _request.default)(opt);
  },

  /**
   * 캐릭터 ID를 입력하여 해당 캐릭터의 타임라인 정보를 검색합니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   * @param {object} params 선택적 요청변수의 Object입니다.
   */
  timeline: function timeline(serverId, characterId) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var opt = {
      base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/timeline"),
      params: params
    };
    return (0, _request.default)(opt);
  },

  /**
   * 캐릭터 ID를 입력하여 해당 캐릭터의 능력치 정보를 검색합니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  status: function status(serverId, characterId) {
    var opt = {
      base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/status")
    };
    return (0, _request.default)(opt);
  },
  equip: _characters.default,
  skill: _characters2.default
};
var _default = characters;
exports.default = _default;