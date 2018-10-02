"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require("./request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auction = {
  itemName: async function itemName(_itemName, params, query) {
    if (params === undefined) params = {};
    params.itemName = _itemName;
    if (query) params.q = makeItemQuery(query);
    //let querystring =
    var opt = {
      base: "df/auction",
      params: params
    };
    return await (0, _request2.default)(opt);
  },
  itemId: async function itemId(_itemId, params, query) {
    if (params === undefined) params = {};
    params.itemId = _itemId;
    if (query) params.q = makeItemQuery(query);
    var opt = {
      base: "df/auction",
      params: params
    };
    return await (0, _request2.default)(opt);
  },
  no: async function no(auctionNo) {
    var opt = {
      base: "df/auction/" + Number(auctionNo)
    };
    return await (0, _request2.default)(opt);
  }
};

function makeItemQuery(query) {
  return JSON.stringify(query).replace(/\"|\{|\}/gi, "");
}

exports.default = auction;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require("./request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var equip = {
  equipment: async function equipment(serverId, characterId) {
    var opt = {
      base: "df/servers/" + serverId + "/characters/" + characterId + "/equip/equipment"
    };
    return await (0, _request2.default)(opt);
  },
  avatar: async function avatar(serverId, characterId) {
    var opt = {
      base: "df/servers/" + serverId + "/characters/" + characterId + "/equip/avatar"
    };
    return await (0, _request2.default)(opt);
  },
  creature: async function creature(serverId, characterId) {
    var opt = {
      base: "df/servers/" + serverId + "/characters/" + characterId + "/equip/creature"
    };
    return await (0, _request2.default)(opt);
  },
  flag: async function flag(serverId, characterId) {
    var opt = {
      base: "df/servers/" + serverId + "/characters/" + characterId + "/equip/flag"
    };
    return await (0, _request2.default)(opt);
  }
};

exports.default = equip;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require("./request");

var _request2 = _interopRequireDefault(_request);

var _characters = require("./characters.equip");

var _characters2 = _interopRequireDefault(_characters);

var _characters3 = require("./characters.skill");

var _characters4 = _interopRequireDefault(_characters3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var characters = {
  character: async function character(serverId, characterName, params) {
    if (params === undefined) params = {};
    params.characterName = characterName;
    var opt = {
      base: "df/servers/" + serverId + "/characters/",
      params: params
    };
    return await (0, _request2.default)(opt);
  },
  timeline: async function timeline(serverId, characterId, params) {
    var opt = {
      base: "df/servers/" + serverId + "/characters/" + characterId + "/timeline",
      params: params
    };
    return await (0, _request2.default)(opt);
  },
  status: async function status(serverId, characterId) {
    var opt = {
      base: "df/servers/" + serverId + "/characters/" + characterId + "/status"
    };
    return await (0, _request2.default)(opt);
  },
  equip: _characters2.default,
  skill: _characters4.default
};

exports.default = characters;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require("./request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var skill = {
  style: async function style(serverId, characterId) {
    var opt = {
      base: "df/servers/" + serverId + "/characters/" + characterId + "/skill/style"
    };
    return await (0, _request2.default)(opt);
  },
  equipment: async function equipment(serverId, characterId) {
    var opt = {
      base: "df/servers/" + serverId + "/characters/" + characterId + "/skill/buff/equip/equipment"
    };
    return await (0, _request2.default)(opt);
  },
  avatar: async function avatar(serverId, characterId) {
    var opt = {
      base: "df/servers/" + serverId + "/characters/" + characterId + "/skill/buff/equip/avatar"
    };
    return await (0, _request2.default)(opt);
  },
  creature: async function creature(serverId, characterId) {
    var opt = {
      base: "df/servers/" + serverId + "/characters/" + characterId + "/skill/buff/equip/creature"
    };
    return await (0, _request2.default)(opt);
  }
};

exports.default = skill;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _characters = require("./characters");

var _characters2 = _interopRequireDefault(_characters);

var _auction = require("./auction");

var _auction2 = _interopRequireDefault(_auction);

var _items = require("./items");

var _items2 = _interopRequireDefault(_items);

var _setitems = require("./setitems");

var _setitems2 = _interopRequireDefault(_setitems);

var _request = require("./request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = {
  servers: async function servers() {
    var opt = {
      base: "df/servers"
    };
    return await (0, _request2.default)(opt);
  },
  characters: _characters2.default,
  auction: _auction2.default,
  items: _items2.default,
  jobs: async function jobs() {
    var opt = {
      base: "df/jobs"
    };
    return await (0, _request2.default)(opt);
  },
  setitems: _setitems2.default
};

exports.default = api;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require("./request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = {
  item: async function item(itemName, params, query) {
    if (params === undefined) params = {};
    params.itemName = itemName;
    if (query) params.q = makeItemQuery(query);
    //let querystring =
    var opt = {
      base: "df/items",
      params: params
    };
    return await (0, _request2.default)(opt);
  },
  detail: async function detail(itemId) {
    var opt = {
      base: "df/items/" + itemId
    };
    return await (0, _request2.default)(opt);
  }
};

exports.default = items;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _querystring = require("querystring");

var _querystring2 = _interopRequireDefault(_querystring);

var _config = require("../config/config.auth");

var _config2 = _interopRequireDefault(_config);

var _config3 = require("../config/config");

var _config4 = _interopRequireDefault(_config3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function request(opt) {
  var instance = _axios2.default.create({
    baseURL: "https://api.neople.co.kr",
    timeout: _config4.default.requestTimeout
  });
  if (opt.params == undefined) opt.params = {};
  opt.params.apikey = _config2.default.APIKey;
  opt.url = opt.base + "?" + _querystring2.default.stringify(opt.params);
  console.log("https://api.neople.co.kr/" + opt.url);

  var rsp = {};
  await instance.get(opt.url).then(function (res) {
    rsp = _config4.default.responeHeader ? {
      status: res.status,
      statusText: res.statusText,
      headers: res.headers,
      body: res.data
    } : res.data;
  }).catch(function (err) {
    if (_config4.default.hideOnErrorApiKey) err.response.data.url = err.response.config.url.replace(_config2.default.APIKey, _config4.default.hidekeyText);else err.response.data.url = err.response.config.url;
    rsp = {
      err: _config4.default.responeHeader ? {
        status: err.response.status,
        statusText: err.response.statusText,
        headers: err.response.headers,
        body: err.response.data
      } : err.response.data
    };
    console.log("\x1b[31m[DNF_API] RequestError\x1b[0m :", err.response.data.url.replace(_config4.default.hidekeyText, "\x1B[33m" + _config4.default.hidekeyText + "\x1B[0m"));
  });

  //convert JSON
  if (_config4.default.returnJSON) rsp = JSON.stringify(rsp);

  return await rsp;
}

exports.default = request;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require("./request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setitems = {
  setitem: async function setitem(setItemName, params) {
    if (params === undefined) params = {};
    params.setItemName = setItemName;
    var opt = {
      base: "df/setitems",
      params: params
    };
    return await (0, _request2.default)(opt);
  },
  detail: async function detail(setItemId) {
    var opt = {
      base: "df/setitems/" + setItemId
    };
    return await (0, _request2.default)(opt);
  }
};

exports.default = setitems;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var auth = {
  APIKey: "YOUR API KEY"
};

exports.default = auth;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var auth = {
  APIKey: "CQgSJfvNanTZ8Dv0YQlLO8uBzTnomAag"
};

exports.default = auth;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  //respone오류 에서 자신의 API KEY갑을 숨겨서 표시합니다.
  hideOnErrorApiKey: true,
  hidekeyText: "{HIDEKEY}",
  //요청후 기다리는 최대 시간입니다 (ms)
  axiosTimeout: 5000,

  //응답에 대한 정보를 JSON형태로 받습니다.
  returnJSON: false,

  //응답내용을 상세하게 출력하도록 변경합니다.
  responeHeader: false,

  //////////////////////////////////////
  //던전 앤 파이터 서버명
  //ex) config.servers.cain
  servers: {
    cain: "cain",
    diregie: "diregie",
    siroco: "siroco",
    prey: "prey",
    casillas: "casillas",
    hilder: "hilder",
    anton: "anton",
    bakal: "bakal"
  },
  //캐릭터 관련 정의 상수
  //ex) config.characters.wordType.match
  characters: {
    wordType: {
      match: "match",
      full: "full"
    }
  },
  //경매장 관련 정의 상수
  //ex) config.auction.sort.unitPrice
  auction: {
    sort: {
      unitPrice: "unitPrice",
      reinforce: "reinforce",
      auctionNo: "auctionNo"
    },
    wordType: {
      match: "match",
      front: "front",
      full: "full"
    },
    query: {
      rarity: {
        common: "커먼",
        uncommon: "언커먼",
        rare: "레어",
        unique: "유니크",
        eqic: "에픽",
        chronicle: "크로니클",
        legendary: "레전더리"
      }
    }
  },
  items: {},
  setitems: {}
};

config.items.rarity = config.auction.query.rarity;
config.setitems.wordType = config.auction.wordType;
exports.default = config;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require("./api");

var _api2 = _interopRequireDefault(_api);

var _config = require("./config/config");

var _config2 = _interopRequireDefault(_config);

var _config3 = require("./config/config.auth");

var _config4 = _interopRequireDefault(_config3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_config4.default.APIKey === "YOUR API KEY") {
  console.error("\x1b[31mPlease change to your api key. \n", "\x1b[33min ./config/config.auth.js\x1b[0m");
}

/*
api.servers.servers().then(data => {
  console.log(data);
});
*/
var opt = {};
var query = {};

opt = {
  wordType: "match",
  limit: 5
};
/*
api.characters.character("cain", "쑤남", opt).then(data => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
*/
/*
opt = {
  limit: 10
};
api.characters.timeline("cain", "d018e5f7e7519e34b8ef21db0c40fd98", opt).then(data => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
*/
/*
api.characters.status("cain", "d018e5f7e7519e34b8ef21db0c40fd98", opt).then(data => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
*/
/*
api.characters.equip.avatar("cain", "d018e5f7e7519e34b8ef21db0c40fd98").then(data => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
*/
/*
api.characters.equip.flag("cain", "d018e5f7e7519e34b8ef21db0c40fd98").then(data => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
*/
/*
api.characters.skill.creature("cain", "d018e5f7e7519e34b8ef21db0c40fd98").then(data => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
*/
/*
api.characters.skill.style("cain", "d018e5f7e7519e34b8ef21db0c40fd98").then(data => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
*/
/*
opt = {
  sort: config.auction.sort.unitPrice,
  limit: 10,
  wordType: config.auction.wordType.match
};
query = {
  minLevel: 1,
  maxlevel: 10,
  rarity: config.auction.query.rarity.rare
};
api.auction.itemName("마그토늄", opt).then(data => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
*/
/*
api.auction.no("670897564").then(data => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
*/
/*
api.items.item("마그토늄").then(data => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
*/
/*
api.items.detail("c6a38ab8c7540cfc51ea2b0b8b610fa7").then(data => {
  if (data.err) return console.log(data.err);
  console.log(data);
});
*/
/*
api.jobs().then(data => {
  console.log(data);
});
*/
/*
opt = {
  limit: 2,
  wordType: config.setitems.wordType.front
};
api.setitems.setitem("오감", opt).then(data => {
  console.log(data);
});
*/
//console.log(api.servers.servers());
/*
api.setitems.detail("040d72e3585ea068f2d85fee654dab20").then(data => {
  console.log(data);
});
*/
exports.default = _api2.default;
