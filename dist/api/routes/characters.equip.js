"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _request = _interopRequireDefault(require("../request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var equip = {
  /**
   * 해당 캐릭터가 장착한 장비 정보를 받아옵니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  equipment: function () {
    var _equipment = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(serverId, characterId) {
      var opt;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              opt = {
                base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/equip/equipment")
              };
              _context.next = 3;
              return (0, _request.default)(opt);

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function equipment(_x, _x2) {
      return _equipment.apply(this, arguments);
    };
  }(),

  /**
   * 해당 캐릭터가 장착한 아바타 정보를 받아옵니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  avatar: function () {
    var _avatar = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(serverId, characterId) {
      var opt;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              opt = {
                base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/equip/avatar")
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

    return function avatar(_x3, _x4) {
      return _avatar.apply(this, arguments);
    };
  }(),

  /**
   * 해당 캐릭터가 장착한 크리쳐 정보를 받아옵니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  creature: function () {
    var _creature = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(serverId, characterId) {
      var opt;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              opt = {
                base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/equip/creature")
              };
              _context3.next = 3;
              return (0, _request.default)(opt);

            case 3:
              return _context3.abrupt("return", _context3.sent);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    return function creature(_x5, _x6) {
      return _creature.apply(this, arguments);
    };
  }(),

  /**
   * 해당 캐릭터가 장착한 휘장 정보를 받아옵니다.
   *
   * @param {string} serverId 캐릭터가 존재하는 서버의 이름입니다.
   * @param {string} characterId 검색할 캐릭터의 ID입니다.
   */
  flag: function () {
    var _flag = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(serverId, characterId) {
      var opt;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              opt = {
                base: "df/servers/".concat(serverId, "/characters/").concat(characterId, "/equip/flag")
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

    return function flag(_x7, _x8) {
      return _flag.apply(this, arguments);
    };
  }()
};
var _default = equip;
exports.default = _default;