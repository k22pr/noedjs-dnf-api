"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Server;
(function (Server) {
    Server["Cain"] = "cain";
    Server["Diregie"] = "diregie";
    Server["Siroco"] = "siroco";
    Server["Prey"] = "prey";
    Server["Casillas"] = "casillas";
    Server["Hilder"] = "hilder";
    Server["Anton"] = "anton";
    Server["Bakal"] = "bakal";
})(Server = exports.Server || (exports.Server = {}));
var Sort;
(function (Sort) {
    Sort["Asc"] = "asc";
    Sort["Desc"] = "desc";
})(Sort = exports.Sort || (exports.Sort = {}));
var Rarity;
(function (Rarity) {
    Rarity["Common"] = "\uCEE4\uBA3C";
    Rarity["Uncommon"] = "\uC5B8\uCEE4\uBA3C";
    Rarity["Rare"] = "\uB808\uC5B4";
    Rarity["Unique"] = "\uC720\uB2C8\uD06C";
    Rarity["Eqic"] = "\uC5D0\uD53D";
    Rarity["Chronicle"] = "\uD06C\uB85C\uB2C8\uD074";
    Rarity["Legendary"] = "\uB808\uC804\uB354\uB9AC";
})(Rarity = exports.Rarity || (exports.Rarity = {}));
var AuctionWordType;
(function (AuctionWordType) {
    AuctionWordType["Match"] = "match";
    AuctionWordType["Front"] = "front";
    AuctionWordType["Full"] = "full";
})(AuctionWordType = exports.AuctionWordType || (exports.AuctionWordType = {}));
var WordType;
(function (WordType) {
    WordType["Match"] = "match";
    WordType["Front"] = "front";
    WordType["Full"] = "full";
})(WordType = exports.WordType || (exports.WordType = {}));
var CharactersWordType;
(function (CharactersWordType) {
    CharactersWordType["Match"] = "match";
    CharactersWordType["Full"] = "full";
})(CharactersWordType = exports.CharactersWordType || (exports.CharactersWordType = {}));
var BaseUri;
(function (BaseUri) {
    BaseUri["Servers"] = "df/servers";
    BaseUri["Auction"] = "df/auction";
    BaseUri["AuctionSold"] = "df/auction-sold";
    BaseUri["Item"] = "df/items";
    BaseUri["SetItem"] = "df/setitems";
})(BaseUri = exports.BaseUri || (exports.BaseUri = {}));
