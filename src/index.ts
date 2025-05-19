import * as request from "./api";
import * as model from "./model/index";

import config from "./util/config";
import * as params from "./util/params";
import * as query from "./util/query";
import * as staticUtil from "./util/static";

const serverNames = staticUtil.server;
const rarityNames = staticUtil.rarity;

const dnf = {
  api: request,
  request,
  config,
  staticUtil,
  serverNames,
  rarityNames,
  query,
  params,
  model,
};

export {
  request as api,
  request,
  config,
  staticUtil,
  serverNames,
  rarityNames,
  query,
  params,
  model,
};
export default dnf;
