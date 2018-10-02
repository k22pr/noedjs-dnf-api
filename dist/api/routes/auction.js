"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _request = _interopRequireDefault(require("../request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var auction = {
  /**
   * 경매장에 등록된 아이템을 "아이템 이름"을 기준으로 받아옵니다
   *
   * @param {string} itemName 검색할 아이템의 이름입니다.
   * @param {object} params 선택적 요청변수의 Object입니다.
   * @param {object} query q에 해당하는 값입니다.
   */
  itemName: function () {
    var _itemName2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_itemName, params, query) {
      var opt;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (params === undefined) params = {};
              params.itemName = _itemName;
              if (query) params.q = makeItemQuery(query); //let querystring =

              opt = {
                base: "df/auction",
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

    return function itemName(_x, _x2, _x3) {
      return _itemName2.apply(this, arguments);
    };
  }(),

  /**
   * 경매장에 등록된 아이템을 "아이템 아이디"을 기준으로 받아옵니다
   *
   * @param {string} itemID 검색할 아이템의 ID입니다.
   * @param {object} params 선택적 요청변수의 Object입니다.
   * @param {object} query q에 해당하는 값입니다.
   */
  itemId: function () {
    var _itemId2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(_itemId, params, query) {
      var opt;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (params === undefined) params = {};
              params.itemId = _itemId;
              if (query) params.q = makeItemQuery(query);
              opt = {
                base: "df/auction",
                params: params
              };
              _context2.next = 6;
              return (0, _request.default)(opt);

            case 6:
              return _context2.abrupt("return", _context2.sent);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function itemId(_x4, _x5, _x6) {
      return _itemId2.apply(this, arguments);
    };
  }(),

  /**
   * 경매장에 등록된 경매장번호로 받아옵니다.
   *
   * @param {Number} auctionNo 검색할 경매장 번호입니다.
   */
  no: function () {
    var _no = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(auctionNo) {
      var opt;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              opt = {
                base: "df/auction/".concat(Number(auctionNo))
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

    return function no(_x7) {
      return _no.apply(this, arguments);
    };
  }()
};

function makeItemQuery(query) {
  return JSON.stringify(query).replace(/\"|\{|\}/gi, "");
}

var _default = auction;
exports.default = _default;