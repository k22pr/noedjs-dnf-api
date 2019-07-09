"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var querystring_1 = __importDefault(require("querystring"));
// import urlencode from "urlencode";
var consola_1 = __importDefault(require("consola"));
var Util = __importStar(require("./"));
var sender = axios_1.default.create({
    baseURL: "https://api.neople.co.kr",
    timeout: Util.Config.axiosTimeout,
});
var showUrl = function (url) {
    return url.replace(Util.Config.key, Util.Config.hidekeyText);
};
var Request = /** @class */ (function () {
    function Request() {
    }
    Request.UriBuilder = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.join("/");
    };
    /**
     *  던전앤파이터 API 서버에 응답을 요청하는 함수 입니다.
     * 해당 함수를 직접 호출 하는것을 권장하지 않습니다.
     *
     * @param {object} opt (요청을 보낼 Parameter값)
     * @returns
     */
    Request.Request = function (opt, method) {
        if (opt === void 0) { opt = {}; }
        if (method === void 0) { method = "GET"; }
        return __awaiter(this, void 0, void 0, function () {
            var responseData, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!Util.Config.key || Util.Config.key == "") {
                            consola_1.default.error("Please change to your api key. ");
                            // return null;
                            // return console.error("\x1b[31mPlease change to your api key. \n", "\x1b[33min setConfigs({key:YOURKEY})\x1b[0m");
                        }
                        if (opt.params == undefined)
                            opt.params = {};
                        opt.params.apikey = Util.Config.key;
                        opt.url = opt.base + "?" + querystring_1.default.stringify(opt.params);
                        _a = method.toLowerCase();
                        switch (_a) {
                            case "post": return [3 /*break*/, 1];
                            case "get": return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, sender
                            .post(opt.url)
                            .then(function (res) {
                            var data;
                            if (res.data.rows)
                                data = res.data.rows;
                            else
                                data = res.data;
                            return { data: data };
                        })
                            .catch(function (err) {
                            var error = {
                                url: showUrl(opt.url),
                                status: err.status,
                                statusText: err.response.statusText,
                                code: err.response.data.error.code,
                                message: err.response.data.error.message,
                            };
                            return { error: error };
                        })];
                    case 2:
                        responseData = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, sender
                            .get(opt.url)
                            .then(function (res) {
                            var data;
                            if (res.data.rows)
                                data = res.data.rows;
                            else
                                data = res.data;
                            return { data: data };
                        })
                            .catch(function (err) {
                            var error = {
                                url: showUrl(opt.url),
                                status: err.response.status,
                                statusText: err.response.statusText,
                                code: err.response.data.error.code,
                                message: err.response.data.error.message,
                            };
                            return { error: error };
                        })];
                    case 4:
                        responseData = _b.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, responseData];
                }
            });
        });
    };
    Request.makeItemQuery = function (query) {
        //  return JSON.stringify(query).replace(/\"|\{|\}/gi, "");
        return encodeURI(query);
    };
    return Request;
}());
exports.default = Request;
