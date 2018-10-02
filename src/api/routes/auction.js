import request from "../request";

const auction = {
  /**
   * 경매장에 등록된 아이템을 "아이템 이름"을 기준으로 받아옵니다
   *
   * @param {string} itemName 검색할 아이템의 이름입니다.
   * @param {object} params 선택적 요청변수의 Object입니다.
   * @param {object} query q에 해당하는 값입니다.
   */
  itemName: async (itemName, params, query) => {
    if (params === undefined) params = {};
    params.itemName = itemName;
    if (query) params.q = makeItemQuery(query);
    //let querystring =
    let opt = {
      base: `df/auction`,
      params: params
    };
    return await request(opt);
  },
  /**
   * 경매장에 등록된 아이템을 "아이템 아이디"을 기준으로 받아옵니다
   *
   * @param {string} itemID 검색할 아이템의 ID입니다.
   * @param {object} params 선택적 요청변수의 Object입니다.
   * @param {object} query q에 해당하는 값입니다.
   */
  itemId: async (itemId, params, query) => {
    if (params === undefined) params = {};
    params.itemId = itemId;
    if (query) params.q = makeItemQuery(query);
    let opt = {
      base: `df/auction`,
      params: params
    };
    return await request(opt);
  },
  /**
   * 경매장에 등록된 경매장번호로 받아옵니다.
   *
   * @param {Number} auctionNo 검색할 경매장 번호입니다.
   */
  no: async auctionNo => {
    let opt = {
      base: `df/auction/${Number(auctionNo)}`
    };
    return await request(opt);
  }
};

function makeItemQuery(query) {
  return JSON.stringify(query).replace(/\"|\{|\}/gi, "");
}

export default auction;
