"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Static = __importStar(require("./static"));
test("Static#Check", function () {
    expect(Static.Server.cain).toContain("cain");
    expect(Static.Server.diregie).toContain("diregie");
    expect(Static.Server.siroco).toContain("siroco");
    expect(Static.Server.prey).toContain("prey");
    expect(Static.Server.casillas).toContain("casillas");
    expect(Static.Server.hilder).toContain("hilder");
    expect(Static.Server.anton).toContain("anton");
    expect(Static.Server.bakal).toContain("bakal");
});
