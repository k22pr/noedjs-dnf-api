import type { Static } from "../util";
import type { NameValue } from "./";

export type Character = {
  serverId: Static.Server;
  characterId: string;
  characterName: string;
  level: number;
  jobId: string;
  jobGrowId: string;
  jobName: string;
  jobGrowName: string;
  fame: number;
};

export type Info = {
  serverId: Static.Server;
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
};

export type Timeline = {
  serverId: Static.Server;
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
    rows: TimeLineRow[];
  };
};

export type TimeLineRow = {
  code: number;
  name: string;
  date: string;
  data: TimeLineRowData;
};

export type TimeLineRowData = {
  itemId: string;
  itemName: string;
  itemRarity: Static.Rarity;
  channelName: string;
  channelNo: number;
  dungeonName: string;
  mistGear: boolean;
};

export type CharacterStatus = {
  serverId: Static.Server;
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
  buff: Buff[];
  status: NameValue[];
};

export type Buff = {
  name: string;
  level?: number;
  status: NameValue[];
};
