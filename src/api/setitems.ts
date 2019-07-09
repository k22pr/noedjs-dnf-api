import * as Util from "../util";

/**
 * 세트 아이템 정보를 세트의 이름으로 검색합니다.
 *
 * @param {string} setItemName 세트 아이템의 이름입니다.
 * @param {object} params 선택적 요청변수의 Object입니다.
 */
export const setitem = (setItemName: string, params: any = {}) => {
  if (params === undefined) params = {};
  params.setItemName = setItemName;
  let opt = {
    base: `df/setitems`,
    params: params,
  };
  return Util.Query.Request(opt);
};

/**
 * 세트 ID로 세트 아이템 정보를 받아옵니다.
 *
 * @param {string} setItemId 세트 아이템의 ID입니다.
 */
export const detail = (setItemId: string) => {
  let opt = {
    base: `df/setitems/${setItemId}`,
  };
  return Util.Query.Request(opt);
};
