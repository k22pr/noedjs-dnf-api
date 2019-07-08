const config = {
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

export default config;
