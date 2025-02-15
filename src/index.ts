import * as Request from "./api";
import * as Model from "./model/index";
import * as Util from "./util";

import Config from "./util/config";
import * as Params from "./util/params";
import * as Query from "./util/query";
import * as Static from "./util/static";

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export default class DnfApi {
  public static Util = Util;
  public static Request = Request;
}

const ServerNames = Static.Server;
const RarityNames = Static.Rarity;

export {
  Request as Api,
  Request,
  Config,
  Static,
  ServerNames,
  RarityNames,
  Query,
  Params,
  Model,
};
