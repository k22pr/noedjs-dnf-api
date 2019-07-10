"use strict";
<<<<<<< Updated upstream

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Config", {
  enumerable: true,
  get: function get() {
    return _config["default"];
  }
});
Object.defineProperty(exports, "Query", {
  enumerable: true,
  get: function get() {
    return _query["default"];
  }
});
exports.Static = exports.Params = void 0;

var _config = _interopRequireDefault(require("./config"));

var _query = _interopRequireDefault(require("./query"));

var Params = _interopRequireWildcard(require("./params"));

exports.Params = Params;

var Static = _interopRequireWildcard(require("./static"));

exports.Static = Static;
=======
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var options_1 = __importDefault(require("./options"));
var query_1 = __importDefault(require("./query"));
var static_1 = __importDefault(require("./static"));
exports.default = { Option: options_1.default, Query: query_1.default, Static: static_1.default };
>>>>>>> Stashed changes
