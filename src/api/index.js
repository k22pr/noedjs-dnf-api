import config from "../config/config";

import characters from "./routes/characters";
import auction from "./routes/auction";
import items from "./routes/items";
import setitems from "./routes/setitems";

import request from "./request";

const api = {
  servers: async () => {
    let opt = {
      base: "df/servers"
    };
    return await request(opt);
  },
  characters: characters,
  auction: auction,
  items: items,
  jobs: async () => {
    let opt = {
      base: "df/jobs"
    };
    return await request(opt);
  },
  setitems: setitems
};
api.config = config;

export default api;
