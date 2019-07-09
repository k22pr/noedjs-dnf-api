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

enum Rarity {
  common = "커먼",
  uncommon = "언커먼",
  rare = "레어",
  unique = "유니크",
  eqic = "에픽",
  chronicle = "크로니클",
  legendary = "레전더리",
}

enum WordType {
  match = "match",
  front = "front",
  full = "full",
}

enum BaseUri {
  Servers = "df/servers",
  Auction = "df/auction",
  Item = "df/items",
  SetItem = "df/setitems",
}

enum CharactersWordType {
  match = "match",
  full = "full",
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
export { Server, BaseUri, Rarity };

// export default class Static {
//   public static characters: Characters;
//   public static Autions: Auctions;
// }
