"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _request = _interopRequireDefault(require("../request"));

var _characters = _interopRequireDefault(require("./characters.equip"));

var _characters2 = _interopRequireDefault(require("./characters.skill"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var characters = {
  /**
   * 서버 이름과 캐릭터 닉네임을 입력하여 해당 캐릭터를 검색합니다.
   *
   * @param {string} [serverId=""] 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} [characterName=""] 검색할 캐릭터의 이름입니다.
   * @param {object} [params={}] 선택적 요청변수의 Object입니다.
   */
  character: function () {
    var _character = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(serverId, characterName) {
      var params,
          opt,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
              if (params === undefined) params = {};
              params.characterName = characterName;
              opt = {
                base: "df/servers/".concat(serverId, "/characters/"),
                params: params
              };
              _context.next = 6;
              return (0, _request.default)(opt);

            case 6:
              return _context.abrupt("return", _context.sent);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function character(_x, _x2) {
      return _character.apply(this, arguments);
    };
  }(),

  /**
   * 캐릭터 ID를 입력하여 해당 캐릭터 정보를 받아옵니다
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  characterId: function () {
    var _characterId2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(serverId, _characterId) {
      var opt;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              opt = {
                base: "df/servers/".concat(serverId, "/characters/").concat(_characterId)
              };
              _context2.next = 3;
              return (0, _request.default)(opt);

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function characterId(_x3, _x4) {
      return _characterId2.apply(this, arguments);
    };
  }(),

  /**
   * 캐릭터 ID를 입력하여 해당 캐릭터의 타임라인 정보를 검색합니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   * @param {object} params 선택적 요청변수의 Object입니다.
   */
  timeline: function () {
    var _timeline = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(serverId, characterId) {
      var params,
          opt,
          _args3 = arguments;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              params = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
              opt = {
                base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/timeline"),
                params: params
              };
              _context3.next = 4;
              return (0, _request.default)(opt);

            case 4:
              return _context3.abrupt("return", _context3.sent);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function timeline(_x5, _x6) {
      return _timeline.apply(this, arguments);
    };
  }(),

  /**
   * 캐릭터 ID를 입력하여 해당 캐릭터의 능력치 정보를 검색합니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  status: function () {
    var _status = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(serverId, characterId) {
      var opt;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              opt = {
                base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/status")
              };
              _context4.next = 3;
              return (0, _request.default)(opt);

            case 3:
              return _context4.abrupt("return", _context4.sent);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function status(_x7, _x8) {
      return _status.apply(this, arguments);
    };
  }(),
  equip: _characters.default,
  skill: _characters2.default
};
var _default = characters;
exports.default = _default;