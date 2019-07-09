import * as Static from "./static";

test("Static#Check", () => {
  expect(Static.Server.cain).toContain("cain");
  expect(Static.Server.diregie).toContain("diregie");
  expect(Static.Server.siroco).toContain("siroco");
  expect(Static.Server.prey).toContain("prey");
  expect(Static.Server.casillas).toContain("casillas");
  expect(Static.Server.hilder).toContain("hilder");
  expect(Static.Server.anton).toContain("anton");
  expect(Static.Server.bakal).toContain("bakal");
});
