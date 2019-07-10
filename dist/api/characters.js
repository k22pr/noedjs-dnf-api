"use strict";
<<<<<<< Updated upstream

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.status = exports.timeline = exports.characterId = exports.characterName = void 0;

var _util = require("../util");

=======
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __importDefault(require("../util"));
>>>>>>> Stashed changes
/**
 * 서버 이름과 캐릭터 닉네임을 입력하여 해당 캐릭터를 검색합니다.
 *
 * @param {Static.Server} [serverId=""] 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} [characterName=""] 검색할 캐릭터의 이름입니다.
 * @param {object} [params={}] 선택적 요청변수의 Object입니다.
 */
<<<<<<< Updated upstream
var characterName = function characterName(serverId, _characterName) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (params === undefined) params = {};
  params.characterName = _characterName;
  var opt = {
    base: _util.Query.UriBuilder(_util.Static.BaseUri.Servers, serverId, "characters"),
    params: params
  };
  return _util.Query.Request(opt);
=======
exports.character = function (serverId, characterName, params) {
    if (params === void 0) { params = {}; }
    if (params === undefined)
        params = {};
    params.characterName = characterName;
    var opt = {
        base: "df/servers/" + serverId + "/characters/",
        params: params
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
/**
 * 캐릭터 ID를 입력하여 해당 캐릭터 정보를 받아옵니다
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
<<<<<<< Updated upstream


exports.characterName = characterName;

var characterId = function characterId(serverId, _characterId) {
  var opt = {
    base: _util.Query.UriBuilder(_util.Static.BaseUri.Servers, serverId, "characters", _characterId)
  };
  return _util.Query.Request(opt);
=======
exports.characterId = function (serverId, characterId) {
    var opt = {
        base: "df/servers/" + serverId + "/characters/" + characterId
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
/**
 * 캐릭터 ID를 입력하여 해당 캐릭터의 타임라인 정보를 검색합니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
<<<<<<< Updated upstream


exports.characterId = characterId;

var timeline = function timeline(serverId, characterId) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var opt = {
    base: _util.Query.UriBuilder(_util.Static.BaseUri.Servers, serverId, "characters", characterId, "timeline"),
    params: params
  };
  return _util.Query.Request(opt);
=======
exports.timeline = function (serverId, characterId, params) {
    if (params === void 0) { params = {}; }
    var opt = {
        base: "df/servers/" + serverId + "/characters/" + characterId + "/timeline",
        params: params
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
/**
 * 캐릭터 ID를 입력하여 해당 캐릭터의 능력치 정보를 검색합니다.
 *
 * @param {Static.Server} serverId 캐릭터가 존재하는 서버의 이름입니다.
 * @param {string} characterId 검색할 캐릭터의 ID입니다.
 */
<<<<<<< Updated upstream


exports.timeline = timeline;

var status = function status(serverId, characterId) {
  var opt = {
    base: _util.Query.UriBuilder(_util.Static.BaseUri.Servers, serverId, "characters", characterId, "status")
  };
  return _util.Query.Request(opt);
=======
exports.status = function (serverId, characterId) {
    var opt = {
        base: "df/servers/" + serverId + "/characters/" + characterId + "/status"
    };
    return util_1.default.Query.Request(opt);
>>>>>>> Stashed changes
};
