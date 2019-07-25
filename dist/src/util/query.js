"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
const axios_1 = __importDefault(require("axios"));
const querystring_1 = __importDefault(require("querystring"));
// import urlencode from "urlencode";
const consola_1 = __importDefault(require("consola"));
const Util = __importStar(require("./"));
const sender = axios_1.default.create({
    baseURL: "https://api.neople.co.kr",
    timeout: Util.Config.axiosTimeout,
});
const showUrl = (url) => {
    return url.replace(Util.Config.key, Util.Config.hidekeyText);
};
class Request {
    static UriBuilder(...args) {
        return args.join("/");
    }
    static queryBuilder(query) {
        let qString = [];
        for (let key in query) {
            qString.push(`${key}:${query[key]},`);
        }
        return qString.join(',');
    }
    /**
     *  던전앤파이터 API 서버에 응답을 요청하는 함수 입니다.
     * 해당 함수를 직접 호출 하는것을 권장하지 않습니다.
     *
     * @param {object} opt (요청을 보낼 Parameter값)
     * @returns
     */
    static Request(opt = {}, method = "GET") {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Util.Config.key || Util.Config.key == "") {
                consola_1.default.error("Please change to your api key. ");
            }
            if (opt.params == undefined)
                opt.params = {};
            if (opt.params.q)
                opt.params.q = this.queryBuilder(opt.params.q);
            opt.params.apikey = Util.Config.key;
            opt.url = `${opt.base}?${querystring_1.default.stringify(opt.params)}`;
            if (Util.Config.showURL)
                console.log(showUrl(opt.url));
            let responseData;
            switch (method.toLowerCase()) {
                case "post":
                    responseData = yield sender
                        .post(opt.url)
                        .then((res) => {
                        let data;
                        if (res.data.rows)
                            data = res.data.rows;
                        else
                            data = res.data;
                        return { data };
                    })
                        .catch((err) => {
                        let error = {
                            url: showUrl(opt.url),
                            status: err.status,
                            statusText: err.response.statusText,
                            code: err.response.data.error.code,
                            message: err.response.data.error.message,
                        };
                        return { error };
                    });
                    break;
                case "get":
                default:
                    responseData = yield sender
                        .get(opt.url)
                        .then((res) => {
                        let data;
                        if (res.data.rows)
                            data = res.data.rows;
                        else
                            data = res.data;
                        return { data };
                    })
                        .catch((err) => {
                        let error = {
                            url: showUrl(opt.url),
                            status: err.response.status,
                            statusText: err.response.statusText,
                            code: err.response.data.error.code,
                            message: err.response.data.error.message,
                        };
                        return { error };
                    });
                    break;
            }
            return responseData;
        });
    }
    static makeItemQuery(query) {
        //  return JSON.stringify(query).replace(/\"|\{|\}/gi, "");
        return encodeURI(query);
    }
}
exports.default = Request;
