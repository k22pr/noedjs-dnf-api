import consola from "consola";

import * as dnf from "./src/index";

dnf.Config.key = "CQgSJfvNanTZ8Dv0YQlLO8uBzTnomAag";

(async () => {
  let { error, data } = await dnf.Api.Characters.character(dnf.ServerNames.anton, "쑤남");
  if (error) consola.error(error);
  else {
    //  consola.info(data);
  }
})();

(async () => {
  let { error, data } = await dnf.Api.Action.itemName("마그", {}, {});
  if (error) consola.error(error);
  else {
    //  consola.info(data);
  }
})();

(async () => {
  let { error, data } = await dnf.Api.Equip.equipment(dnf.ServerNames.anton, "a1cd5b4c567f2ddeb93cd48ce10f9ff5");
  if (error) consola.error(error);
  else {
    //  consola.info(data);
  }
})();
