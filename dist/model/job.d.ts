/** 직업 정보 인터페이스 */
export interface IJob {
    jobId: string;
    jobName: string;
    rows: IJobGrow[];
}
/** 전직 정보 인터페이스 */
export interface IJobGrow {
    jobGrowId: string;
    jobGrowName: string;
    next?: IJobGrow;
}
/** 스킬 리스트 인터페이스 */
export interface ISkillList {
    jobId: string;
    jobName: string;
    jobGrowId: string;
    jobGrowName: string;
    skills: ISkill[];
}
/** 스킬 기본 정보 인터페이스 */
export interface ISkill {
    skillId: string;
    skillName: string;
    requiredLevel: number;
    type: string;
    costType: string;
}
/** 스킬 상세 정보 인터페이스 */
export interface ISkillDetail {
    jobId: string;
    jobName: string;
    skillId: string;
    skillName: string;
    requiredLevel: number;
    type: string;
    costType: string;
    desc: string;
    descDetail: string;
    consumeMp: number;
    consumeItem: IConsumeItem | null;
    cooldownTime: number;
    levelInfo: ISkillLevelInfo[];
}
/** 스킬 소비 아이템 인터페이스 */
export interface IConsumeItem {
    itemId: string;
    itemName: string;
    value: number;
}
/** 스킬 레벨 정보 인터페이스 */
export interface ISkillLevelInfo {
    level: number;
    requiredLevel: number;
    consumeMp: number;
    cooldownTime: number;
    desc: string;
    descDetail: string;
}
