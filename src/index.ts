import * as request from "./api";
import * as model from "./model/index";
import * as util from "./util";

import config from "./util/config";
import * as params from "./util/params";
import * as query from "./util/query";
import * as staticUtil from "./util/static";

export default class DnfApi {
  util = util;
  request = request;
}

const ServerNames = staticUtil.Server;
const RarityNames = staticUtil.Rarity;

export {
  request as api,
  request,
  config,
  staticUtil,
  ServerNames,
  RarityNames,
  query,
  params,
  model,
};
