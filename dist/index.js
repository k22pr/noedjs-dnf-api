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
const Request = __importStar(require("./api"));
exports.Api = Request;
exports.Request = Request;
const Util = __importStar(require("./util"));
const Model = __importStar(require("./model/index"));
exports.Model = Model;
const Params = __importStar(require("./util/params"));
exports.Params = Params;
const config_1 = __importDefault(require("./util/config"));
exports.Config = config_1.default;
const Static = __importStar(require("./util/static"));
exports.Static = Static;
const Query = __importStar(require("./util/query"));
exports.Query = Query;
class DnfApi {
}
exports.default = DnfApi;
DnfApi.Util = Util;
DnfApi.Request = Request;
const ServerNames = Static.Server;
exports.ServerNames = ServerNames;
const RarityNames = Static.Rarity;
exports.RarityNames = RarityNames;
