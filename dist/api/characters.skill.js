"use strict";
<<<<<<< Updated upstream

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.creature = exports.avatar = exports.equipment = exports.style = void 0;

var _util = require("../util");

=======
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __importDefault(require("../util"));
>>>>>>> Stashed changes
/**
 *  아이템 및 장비를 통한 스킬 강화 제외 입니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
<<<<<<< Updated upstream
var style = function style(serverId, characterId) {
  var opt = {
    base: "".concat(_util.Query.UriBuilder(_util.Static.BaseUri.Servers, serverId, "characters", characterId, "skill", "style"))
  };
  return _util.Query.Request(opt);
=======
exports.style = function (serverId, characterId) {
    var opt = {
        base: "df/servers/" + serverId + "/characters/" + characterId + "/skill/style"
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
/**
 * 캐릭터 '버프 스킬 강화 장착 장비'(스위칭) 를 조회합니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
<<<<<<< Updated upstream


exports.style = style;

var equipment = function equipment(serverId, characterId) {
  var opt = {
    base: "".concat(_util.Query.UriBuilder(_util.Static.BaseUri.Servers, serverId, "characters", characterId, "skill", "buff", "equip", "equipment"))
  };
  return _util.Query.Request(opt);
=======
exports.equipment = function (serverId, characterId) {
    var opt = {
        base: "df/servers/" + serverId + "/characters/" + characterId + "/skill/buff/equip/equipment"
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
/**
 * 캐릭터 '버프 스킬 강화 장착 아바타'(스위칭) 를 조회합니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
<<<<<<< Updated upstream


exports.equipment = equipment;

var avatar = function avatar(serverId, characterId) {
  var opt = {
    base: "".concat(_util.Query.UriBuilder(_util.Static.BaseUri.Servers, serverId, "characters", characterId, "skill", "buff", "equip", "avatar"))
  };
  return _util.Query.Request(opt);
=======
exports.avatar = function (serverId, characterId) {
    var opt = {
        base: "df/servers/" + serverId + "/characters/" + characterId + "/skill/buff/equip/avatar"
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
/**
 * 캐릭터 '버프 스킬 강화 장착 크리쳐'(스위칭) 를 조회합니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
<<<<<<< Updated upstream


exports.avatar = avatar;

var creature = function creature(serverId, characterId) {
  var opt = {
    base: "".concat(_util.Query.UriBuilder(_util.Static.BaseUri.Servers, serverId, "characters", characterId, "skill", "buff", "equip", "creature"))
  };
  return _util.Query.Request(opt);
=======
exports.creature = function (serverId, characterId) {
    var opt = {
        base: "df/servers/" + serverId + "/characters/" + characterId + "/skill/buff/equip/creature"
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
