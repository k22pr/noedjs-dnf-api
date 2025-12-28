import type * as model from "../model";
import { query, staticUtil } from "../util";

/**
 * 32. 직업 정보
 * 던전앤파이터 게임 내 모든 직업 정보를 조회합니다.
 */
export const list = () => {
  const opt = {
    base: query.UriBuilder(staticUtil.BaseUri.Jobs),
  };
  return query.Request<model.job.IJob[]>(opt);
};

/**
 * 33. 직업별 스킬 리스트
 *
 * @param {string} jobId 캐릭터 직업 고유 코드
 * @param {string} jobGrowId 캐릭터 전직 직업 고유 코드
 */
export const skills = (jobId: string, jobGrowId: string) => {
  const opt = {
    base: query.UriBuilder(staticUtil.BaseUri.Skills, jobId),
    params: { jobGrowId },
  };
  return query.Request<model.job.ISkillList>(opt);
};

/**
 * 34. 직업별 스킬 상세 정보 조회
 *
 * @param {string} jobId 캐릭터 직업 고유 코드
 * @param {string} skillId 스킬 고유 코드
 */
export const skillDetail = (jobId: string, skillId: string) => {
  const opt = {
    base: query.UriBuilder(staticUtil.BaseUri.Skills, jobId, skillId),
  };
  return query.Request<model.job.ISkillDetail>(opt);
};
