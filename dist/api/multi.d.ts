import type * as model from "../model";
/**
 * 해당하는 아이템의 상세정보를 요청합니다.
 *
 * @param {string} itemId 검색할 아이템의 ID
 */
export declare const items: (itemIdList: string[]) => Promise<model.IDnfResponse<model.IRows<model.item.IDetail>>>;
/**
 * 31. 다중 세트 아이템 상세 정보 조회
 * 세트 아이템 최대 15개 조회 가능합니다.
 * 중복된 세트 아이템 ID 요청 시 중복된 항목은 제거 됩니다.
 *
 * @param {string[]} setItemIdList 세트 아이템 ID 배열
 */
export declare const setItems: (setItemIdList: string[]) => Promise<model.IDnfResponse<model.IRows<model.setItem.IDetail>>>;
/**
 * 35. 다중 스킬 상세 정보 조회
 * 스킬 목록 최대 10개 조회 가능합니다.
 * 중복된 스킬 ID 요청 시 중복된 항목은 제거 됩니다.
 *
 * @param {string} jobId 캐릭터 직업 고유 코드
 * @param {string[]} skillIdList 스킬 ID 배열
 */
export declare const skills: (jobId: string, skillIdList: string[]) => Promise<model.IDnfResponse<model.IRows<model.job.ISkillDetail>>>;
