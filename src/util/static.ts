interface Rarity {
  common: "커먼";
  uncommon: "언커먼";
  rare: "레어";
  unique: "유니크";
  eqic: "에픽";
  chronicle: "크로니클";
  legendary: "레전더리";
}

interface WordType {
  match: "match";
  front: "front";
  full: "full";
}
interface CharactersWordType {
  match: "match";
  full: "full";
}

interface Servers {
  cain: "cain";
  diregie: "diregie";
  siroco: "siroco";
  prey: "prey";
  casillas: "casillas";
  hilder: "hilder";
  anton: "anton";
  bakal: "bakal";
}

interface Characters {
  wordType: CharactersWordType;
}

interface Auctions {
  sort: {
    unitPrice: "unitPrice";
    reinforce: "reinforce";
    auctionNo: "auctionNo";
  };
  wordType: WordType;
  query: {
    rarity: Rarity;
  };
}

interface Items {
  rarity: Rarity;
}

enum Server {
  cain = "cain",
  diregie = "diregie",
  siroco = "siroco",
  prey = "prey",
  casillas = "casillas",
  hilder = "hilder",
  anton = "anton",
  bakal = "bakal",
}
export { Server };

// export default class Static {
//   public static characters: Characters;
//   public static Autions: Auctions;
// }
