import type * as model from "../model";
/**
 * 32. 직업 정보
 * 던전앤파이터 게임 내 모든 직업 정보를 조회합니다.
 */
export declare const list: () => Promise<model.IDnfResponse<model.job.IJob[]>>;
/**
 * 33. 직업별 스킬 리스트
 *
 * @param {string} jobId 캐릭터 직업 고유 코드
 * @param {string} jobGrowId 캐릭터 전직 직업 고유 코드
 */
export declare const skills: (jobId: string, jobGrowId: string) => Promise<model.IDnfResponse<model.job.ISkillList>>;
/**
 * 34. 직업별 스킬 상세 정보 조회
 *
 * @param {string} jobId 캐릭터 직업 고유 코드
 * @param {string} skillId 스킬 고유 코드
 */
export declare const skillDetail: (jobId: string, skillId: string) => Promise<model.IDnfResponse<model.job.ISkillDetail>>;
