"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.status = exports.timeline = exports.characterId = exports.character = void 0;

var _util = _interopRequireDefault(require("../util"));

/**
 * 서버 이름과 캐릭터 닉네임을 입력하여 해당 캐릭터를 검색합니다.
 *
 * @param {string} [serverId=""] 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} [characterName=""] 검색할 캐릭터의 이름입니다.
 * @param {object} [params={}] 선택적 요청변수의 Object입니다.
 */
var character = function character(serverId, characterName) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (params === undefined) params = {};
  params.characterName = characterName;
  var opt = {
    base: "df/servers/".concat(serverId, "/characters/"),
    params: params
  };
  return _util["default"].Query.Request(opt);
};
/**
 * 캐릭터 ID를 입력하여 해당 캐릭터 정보를 받아옵니다
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */


exports.character = character;

var characterId = function characterId(serverId, _characterId) {
  var opt = {
    base: "df/servers/".concat(serverId, "/characters/").concat(_characterId)
  };
  return _util["default"].Query.Request(opt);
};
/**
 * 캐릭터 ID를 입력하여 해당 캐릭터의 타임라인 정보를 검색합니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */


exports.characterId = characterId;

var timeline = function timeline(serverId, characterId) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var opt = {
    base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/timeline"),
    params: params
  };
  return _util["default"].Query.Request(opt);
};
/**
 * 캐릭터 ID를 입력하여 해당 캐릭터의 능력치 정보를 검색합니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */


exports.timeline = timeline;

var status = function status(serverId, characterId) {
  var opt = {
    base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/status")
  };
  return _util["default"].Query.Request(opt);
};

exports.status = status;