/////////////////////////////////////////
// MIT License
//
//  Copyright (c) 2018 k22pr, 서버지기
//
////////////////////////////////////////

import api from "./api";
import auth from "./config/config.auth";

if (auth.APIKey === "YOUR API KEY") {
  console.error("\x1b[31mPlease change to your api key. \n", "\x1b[33min ./config/config.auth.js\x1b[0m");
}

export default api;
