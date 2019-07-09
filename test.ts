import consola from "consola";

import * as dnf from "./src/index";

dnf.Option.key = "CQgSJfvNanTZ8Dv0YQlLO8uBzTnomAag";

(async () => {
  let { err, data } = await dnf.Api.Characters.character(dnf.ServerNames.anton, "쑤남");
  if (err) consola.error(err);
  else {
    consola.info(data);
  }

  let { itemError, item } = await dnf.Api.Action.itemName("마그", {}, {});
  if (itemError) consola.error(itemError);
  else {
    consola.info(item);
  }

  console.log(dnf.Query.UriBuilder("test", "111", "characters"));
})();
