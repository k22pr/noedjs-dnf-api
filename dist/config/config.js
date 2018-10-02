"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = config;
exports.default = _default;