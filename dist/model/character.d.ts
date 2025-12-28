import type { staticUtil } from "../util";
import type { INameValue } from "./";
/** 캐릭터 정보 인터페이스 */
export interface ICharacter {
    serverId: staticUtil.Server;
    characterId: string;
    characterName: string;
    level: number;
    jobId: string;
    jobGrowId: string;
    jobName: string;
    jobGrowName: string;
    fame: number;
}
/** 캐릭터 상세 정보 인터페이스 */
export interface IInfo {
    serverId: staticUtil.Server;
    characterId: string;
    characterName: string;
    level: number;
    jobId: string;
    jobGrowId: string;
    jobName: string;
    jobGrowName: string;
    fame: number;
    adventureName: string;
    guildId: string | null;
    guildName: string | null;
}
/** 캐릭터 타임라인 인터페이스 */
export interface ITimeline {
    serverId: staticUtil.Server;
    characterId: string;
    characterName: string;
    level: number;
    jobId: string;
    jobGrowId: string;
    jobName: string;
    jobGrowName: string;
    adventureName: string;
    guildId: string;
    guildName: string;
    timeline: {
        date: {
            start: Date;
            end: Date;
        };
        next: string;
        rows: ITimeLineRow[];
    };
}
/** 타임라인 행 인터페이스 */
export interface ITimeLineRow {
    code: number;
    name: string;
    date: string;
    data: ITimeLineRowData;
}
/** 타임라인 행 데이터 인터페이스 */
export interface ITimeLineRowData {
    itemId: string;
    itemName: string;
    itemRarity: staticUtil.Rarity;
    channelName: string;
    channelNo: number;
    dungeonName: string;
    mistGear: boolean;
}
/** 캐릭터 상태 인터페이스 */
export interface ICharacterStatus {
    serverId: staticUtil.Server;
    characterId: string;
    characterName: string;
    level: number;
    jobId: string;
    jobGrowId: string;
    jobName: string;
    jobGrowName: string;
    fame: number;
    adventureName: string;
    guildId: string | null;
    guildName: string | null;
    buff: IBuff[];
    status: INameValue[];
}
/** 버프 정보 인터페이스 */
export interface IBuff {
    name: string;
    level?: number;
    status: INameValue[];
}
/** 캐릭터 명성 검색 결과 인터페이스 */
export interface ICharacterFame {
    serverId: staticUtil.Server;
    characterId: string;
    characterName: string;
    level: number;
    jobId: string;
    jobGrowId: string;
    jobName: string;
    jobGrowName: string;
    fame: number;
}
/** 안개 융화 정보 인터페이스 */
export interface IMistAssimilation {
    serverId: staticUtil.Server;
    characterId: string;
    characterName: string;
    level: number;
    jobId: string;
    jobGrowId: string;
    jobName: string;
    jobGrowName: string;
    mistAssimilation: {
        level: number;
        expRate: number;
        status: IMistStatus[];
    };
}
/** 안개 융화 상태 인터페이스 */
export interface IMistStatus {
    name: string;
    value: number;
}
