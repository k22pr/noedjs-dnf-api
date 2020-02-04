"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
exports.List = () => {
    let opt = {
        base: util_1.Query.UriBuilder(util_1.Static.BaseUri.Servers),
    };
    return util_1.Query.Request(opt);
};
