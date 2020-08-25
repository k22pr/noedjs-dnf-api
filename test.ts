import * as dnf from "./src/index";
import * as Util from "./src/util";

dnf.Config.key = "66dmPNRfGfl6875tBlhUwHfPLjOpVAk6";

// (async () => {
//   let { error, data } = await dnf.Api.Server.List();
//   if (error) consola.error(error);
//   else {
//     consola.info(data[0]);
//   }
// })();

// (async () => {
//   let { error, data } = await dnf.Api.Characters.characterName(dnf.ServerNames.Anton, "쑤남");
//   if (error) console.error(error);
//   else {
//     console.info(data);
//   }
// })();

(async () => {
  let { error, data } = await dnf.Api.Action.itemId("37d04be64e33cccb04e96edd5d7c648a");
  console.log(data);
})();

// (async () => {
//   let { error, data } = await dnf.Api.Characters.characterId(dnf.ServerNames.anton, "a1cd5b4c567f2ddeb93cd48ce10f9ff5");
//   if (error) consola.error(error);
//   else {
//     consola.info(data);
//   }
// })();

// (async () => {
//   let opt: dnf.Params.IItem = {
//     wordType: dnf.Static.AuctionWordType.Full,
//   };
//   let { error, data } = await dnf.Api.Item.item("샛별", opt);
//   if (error) consola.error(error);
//   else {
//     consola.info(data);
//   }
// })();

// (async () => {
//   let { error, data } = await dnf.Api.SetItem.detail("040d72e3585ea068f2d85fee654dab20");
//   if (error) console.error(error);
//   else {
//     consola.info(data);
//   }
// })();
