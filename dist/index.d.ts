declare const _default: {
    Util: {
        Option: import("./util/options").options;
        Query: typeof import("./util/query").default;
        Static: typeof import("./util/static").default;
    };
    Request: {
        Action: typeof import("./api/auction");
        Equip: typeof import("./api/characters.equip");
        Skill: typeof import("./api/characters.skill");
        Characters: typeof import("./api/characters");
        Item: typeof import("./api/items");
        SetItem: typeof import("./api/setitems");
    };
};
export default _default;
