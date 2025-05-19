import * as request from "./api";
import * as model from "./model/index";
import * as util from "./util";
import * as query from "./util/query";
declare const dnf: {
    api: typeof request;
    request: typeof request;
    config: import("./util/config").IConfig;
    staticUtil: typeof util.staticUtil;
    serverNames: typeof util.staticUtil.Server;
    rarityNames: typeof util.staticUtil.Rarity;
    query: typeof query;
    params: typeof util.params;
    model: typeof model;
};
export default dnf;
export { dnf };
