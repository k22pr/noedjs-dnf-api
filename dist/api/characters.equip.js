"use strict";
<<<<<<< Updated upstream

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flag = exports.creature = exports.avatar = exports.equipment = void 0;

var _util = require("../util");

=======
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __importDefault(require("../util"));
>>>>>>> Stashed changes
/**
 * 해당 캐릭터가 장착한 장비 정보를 받아옵니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
<<<<<<< Updated upstream
var equipment = function equipment(serverId, characterId) {
  var opt = {
    base: _util.Query.UriBuilder(_util.Static.BaseUri.Servers, serverId, "characters", characterId, "equip", "equipment")
  };
  return _util.Query.Request(opt);
=======
exports.equipment = function (serverId, characterId) {
    var opt = {
        base: "df/servers/" + serverId + "/characters/" + characterId + "/equip/equipment"
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
/**
 * 해당 캐릭터가 장착한 아바타 정보를 받아옵니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
<<<<<<< Updated upstream


exports.equipment = equipment;

var avatar = function avatar(serverId, characterId) {
  var opt = {
    base: _util.Query.UriBuilder(_util.Static.BaseUri.Servers, serverId, "characters", characterId, "equip", "avatar")
  };
  return _util.Query.Request(opt);
=======
exports.avatar = function (serverId, characterId) {
    var opt = {
        base: "df/servers/" + serverId + "/characters/" + characterId + "/equip/avatar"
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
/**
 * 해당 캐릭터가 장착한 크리쳐 정보를 받아옵니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
<<<<<<< Updated upstream


exports.avatar = avatar;

var creature = function creature(serverId, characterId) {
  var opt = {
    base: _util.Query.UriBuilder(_util.Static.BaseUri.Servers, serverId, "characters", characterId, "equip", "creature")
  };
  return _util.Query.Request(opt);
=======
exports.creature = function (serverId, characterId) {
    var opt = {
        base: "df/servers/" + serverId + "/characters/" + characterId + "/equip/creature"
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
/**
 * 해당 캐릭터가 장착한 휘장 정보를 받아옵니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
<<<<<<< Updated upstream


exports.creature = creature;

var flag = function flag(serverId, characterId) {
  var opt = {
    base: _util.Query.UriBuilder(_util.Static.BaseUri.Servers, serverId, "characters", characterId, "equip", "flag")
  };
  return _util.Query.Request(opt);
=======
exports.flag = function (serverId, characterId) {
    var opt = {
        base: "df/servers/" + serverId + "/characters/" + characterId + "/equip/flag"
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
