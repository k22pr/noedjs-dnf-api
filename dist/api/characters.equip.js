"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flag = exports.creature = exports.avatar = exports.equipment = void 0;

var _util = _interopRequireDefault(require("../util"));

/**
 * 해당 캐릭터가 장착한 장비 정보를 받아옵니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
var equipment = function equipment(serverId, characterId) {
  var opt = {
    base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/equip/equipment")
  };
  return _util["default"].Query.Request(opt);
};
/**
 * 해당 캐릭터가 장착한 아바타 정보를 받아옵니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */


exports.equipment = equipment;

var avatar = function avatar(serverId, characterId) {
  var opt = {
    base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/equip/avatar")
  };
  return _util["default"].Query.Request(opt);
};
/**
 * 해당 캐릭터가 장착한 크리쳐 정보를 받아옵니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */


exports.avatar = avatar;

var creature = function creature(serverId, characterId) {
  var opt = {
    base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/equip/creature")
  };
  return _util["default"].Query.Request(opt);
};
/**
 * 해당 캐릭터가 장착한 휘장 정보를 받아옵니다.
 *
 * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */


exports.creature = creature;

var flag = function flag(serverId, characterId) {
  var opt = {
    base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/equip/flag")
  };
  return _util["default"].Query.Request(opt);
};

exports.flag = flag;