"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Request = __importStar(require("./api"));
exports.Api = Request;
var Util = __importStar(require("./util"));
var Model = __importStar(require("./model/index"));
exports.Model = Model;
var Params = __importStar(require("./util/params"));
exports.Params = Params;
var config_1 = __importDefault(require("./util/config"));
exports.Config = config_1.default;
var Static = __importStar(require("./util/static"));
exports.Static = Static;
var Query = __importStar(require("./util/query"));
exports.Query = Query;
var DnfApi = /** @class */ (function () {
    function DnfApi() {
    }
    DnfApi.Util = Util;
    DnfApi.Request = Request;
    return DnfApi;
}());
exports.default = DnfApi;
var ServerNames = Static.Server;
exports.ServerNames = ServerNames;
var RarityNames = Static.Rarity;
exports.RarityNames = RarityNames;
