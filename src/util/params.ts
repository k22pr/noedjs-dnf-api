import * as Static from "./static";
interface QueryOptions {
  base: string;
  params?: any;
}
interface ICharParams {
  jobId?: string;
  jobGrowId?: string;
  wordType?: "match" | "full";
  limit?: number;
}

export { ICharParams };
