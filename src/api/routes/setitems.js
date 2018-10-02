import request from "../request";

const setitems = {
  /**
   * 세트 아이템 정보를 세트의 이름으로 검색합니다.
   *
   * @param {string} setItemName 세트 아이템의 이름입니다.
   * @param {object} params 선택적 요청변수의 Object입니다.
   */
  setitem: async (setItemName, params) => {
    if (params === undefined) params = {};
    params.setItemName = setItemName;
    let opt = {
      base: `df/setitems`,
      params: params
    };
    return await request(opt);
  },

  /**
   * 세트 ID로 세트 아이템 정보를 받아옵니다.
   *
   * @param {string} setItemId 세트 아이템의 ID입니다.
   */
  detail: async setItemId => {
    let opt = {
      base: `df/setitems/${setItemId}`
    };
    return await request(opt);
  }
};

export default setitems;
