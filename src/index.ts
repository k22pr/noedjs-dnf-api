import * as Request from "./api";
import * as Util from "./util";

export default class DnfApi {
  public static Util = Util;
  public static Request = Request;
}
const Config = Util.Config;

const Static = Util.Static;
const ServerNames = Static.Server;
const RarityNames = Static.Rarity;

const Query = Util.Query;

export { Request as Api, Config, Static, ServerNames, RarityNames, Query };
