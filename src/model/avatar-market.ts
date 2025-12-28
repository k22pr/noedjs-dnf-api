/** 아바타 마켓 상품 검색 결과 인터페이스 */
export interface ISale {
  goodsNo: number;
  sellerId: string;
  sellerName: string;
  title: string;
  price: number;
  registDate: string;
  hashtag: string[];
  avatarCount: number;
}

/** 아바타 마켓 상품 상세 인터페이스 */
export interface ISaleDetail extends ISale {
  avatar: IAvatarItem[];
}

/** 아바타 아이템 인터페이스 */
export interface IAvatarItem {
  slotId: string;
  slotName: string;
  itemId: string;
  itemName: string;
  itemRarity: string;
  clone: ICloneAvatar;
  optionAbility: string | null;
  emblems: IEmblem[];
}

/** 클론 아바타 인터페이스 */
export interface ICloneAvatar {
  itemId: string | null;
  itemName: string | null;
}

/** 엠블렘 인터페이스 */
export interface IEmblem {
  slotNo: number;
  slotColor: string;
  itemName: string;
  itemRarity: string;
}

/** 아바타 마켓 시세 검색 결과 인터페이스 */
export interface ISold {
  goodsNo: number;
  sellerId: string;
  sellerName: string;
  title: string;
  price: number;
  soldDate: string;
  hashtag: string[];
  avatarCount: number;
}

/** 아바타 마켓 시세 상세 인터페이스 */
export interface ISoldDetail extends ISold {
  avatar: IAvatarItem[];
}

/** 해시태그 조회 결과 인터페이스 */
export interface IHashtag {
  hashtag: IHashtagItem[];
}

/** 해시태그 아이템 인터페이스 */
export interface IHashtagItem {
  hashtagType: string;
  name: string;
}
