import * as Request from "./api";
import * as Model from "./model/index";
import * as Util from "./util";
import Config from "./util/config";
import * as Params from "./util/params";
import * as Query from "./util/query";
import * as Static from "./util/static";
export default class DnfApi {
    static Util: typeof Util;
    static Request: typeof Request;
}
declare const ServerNames: typeof Util.Static.Server;
declare const RarityNames: typeof Util.Static.Rarity;
export { Request as Api, Request, Config, Static, ServerNames, RarityNames, Query, Params, Model, };
