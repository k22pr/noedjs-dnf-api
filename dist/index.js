"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("@babel/polyfill");

var _api = _interopRequireDefault(require("./api"));

var _config = _interopRequireDefault(require("./config/config.auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/////////////////////////////////////////
// MIT License
//
//  Copyright (c) 2018 k22pr, 서버지기
//
////////////////////////////////////////
if (_config.default.APIKey === "YOUR API KEY") {
  console.error("\x1b[31mPlease change to your api key. \n", "\x1b[33min ./config/config.auth.js\x1b[0m");
}

var _default = _api.default;
exports.default = _default;