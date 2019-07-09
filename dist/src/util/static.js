"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Server;
(function (Server) {
    Server["cain"] = "cain";
    Server["diregie"] = "diregie";
    Server["siroco"] = "siroco";
    Server["prey"] = "prey";
    Server["casillas"] = "casillas";
    Server["hilder"] = "hilder";
    Server["anton"] = "anton";
    Server["bakal"] = "bakal";
})(Server = exports.Server || (exports.Server = {}));
var Sort;
(function (Sort) {
    Sort["Asc"] = "asc";
    Sort["Desc"] = "desc";
})(Sort = exports.Sort || (exports.Sort = {}));
var Rarity;
(function (Rarity) {
    Rarity["common"] = "\uCEE4\uBA3C";
    Rarity["uncommon"] = "\uC5B8\uCEE4\uBA3C";
    Rarity["rare"] = "\uB808\uC5B4";
    Rarity["unique"] = "\uC720\uB2C8\uD06C";
    Rarity["eqic"] = "\uC5D0\uD53D";
    Rarity["chronicle"] = "\uD06C\uB85C\uB2C8\uD074";
    Rarity["legendary"] = "\uB808\uC804\uB354\uB9AC";
})(Rarity = exports.Rarity || (exports.Rarity = {}));
var AuctionWordType;
(function (AuctionWordType) {
    AuctionWordType["Match"] = "match";
    AuctionWordType["Front"] = "front";
    AuctionWordType["Full"] = "full";
})(AuctionWordType = exports.AuctionWordType || (exports.AuctionWordType = {}));
var WordType;
(function (WordType) {
    WordType["match"] = "match";
    WordType["front"] = "front";
    WordType["full"] = "full";
})(WordType = exports.WordType || (exports.WordType = {}));
var CharactersWordType;
(function (CharactersWordType) {
    CharactersWordType["match"] = "match";
    CharactersWordType["full"] = "full";
})(CharactersWordType = exports.CharactersWordType || (exports.CharactersWordType = {}));
var BaseUri;
(function (BaseUri) {
    BaseUri["Servers"] = "df/servers";
    BaseUri["Auction"] = "df/auction";
    BaseUri["Item"] = "df/items";
    BaseUri["SetItem"] = "df/setitems";
})(BaseUri = exports.BaseUri || (exports.BaseUri = {}));
