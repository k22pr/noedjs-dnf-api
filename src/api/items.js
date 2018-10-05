import request from "../request";

const items = {
  /**
   * 현재 인게임에서 획득 가능한 아이템의 경우만 검색 가능합니다.
   *
   * @param {string} itemName 검색할 아이템의 명칭
   * @param {string} params 선택적 요청변수의 Object입니다.
   * @param {string} query 선택적 요청변수의 Object입니다. (실제 요청의 q에 해당하는 부분입니다.)
   */
  item: (itemName, params, query) => {
    if (params === undefined) params = {};
    params.itemName = itemName;
    if (query) params.q = makeItemQuery(query);
    //let querystring =
    let opt = {
      base: `df/items`,
      params: params
    };
    return request(opt);
  },
  /**
   * 해당하는 아이템의 상세정보를 요청합니다.
   *
   * @param {string} itemId 검색할 아이템의 ID
   */
  detail: itemId => {
    let opt = {
      base: `df/items/${itemId}`
    };
    return request(opt);
  }
};

export default items;
