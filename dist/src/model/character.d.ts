export declare type Character = {
    characterId: string;
    characterName: string;
    level: number;
    jobId: string;
    jobGrowId: string;
    jobName: string;
    jobGrowName: string;
};
export declare type Info = {
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
};
export declare type Timeline = {
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
        rows: any[];
    };
};
