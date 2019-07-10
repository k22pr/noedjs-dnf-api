declare const config: {
    servers: {
        cain: string;
        diregie: string;
        siroco: string;
        prey: string;
        casillas: string;
        hilder: string;
        anton: string;
        bakal: string;
    };
    characters: {
        wordType: {
            match: string;
            full: string;
        };
    };
    auction: {
        sort: {
            unitPrice: string;
            reinforce: string;
            auctionNo: string;
        };
        wordType: {
            match: string;
            front: string;
            full: string;
        };
        query: {
            rarity: {
                common: string;
                uncommon: string;
                rare: string;
                unique: string;
                eqic: string;
                chronicle: string;
                legendary: string;
            };
        };
    };
    items: {};
    setitems: {};
};
export default config;
