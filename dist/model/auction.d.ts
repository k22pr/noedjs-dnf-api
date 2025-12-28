/** 경매장 아이템 인터페이스 */
export interface IAuction {
    auctionNo: number;
    regDate: Date;
    expireDate: Date;
    itemId: string;
    itemName: string;
    itemAvailableLevel: number;
    itemRarity: string;
    itemTypeId: string;
    itemType: string;
    itemTypeDetailId: string;
    itemTypeDetail: string;
    refine: number;
    reinforce: number;
    amplificationName: string;
    fame: number;
    count: number;
    regCount: number;
    price: number;
    currentPrice: number;
    unitPrice: number;
    averagePrice: number;
    upgrade?: number;
    upgradeMax?: number;
}
/** 판매 완료 아이템 인터페이스 */
export interface IAuctionSolid {
    soldDate: string;
    itemId: string;
    itemName: string;
    itemAvailableLevel: number;
    itemRarity: string;
    itemTypeId: string;
    itemType: string;
    itemTypeDetailId: string;
    itemTypeDetail: string;
    refine: number;
    reinforce: number;
    amplificationName: string | null;
    fame: number;
    count: number;
    price: number;
    unitPrice: number;
    upgrade?: number;
    upgradeMax?: number;
}
