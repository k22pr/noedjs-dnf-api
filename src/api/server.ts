import type * as Model from "../model";
import { query, staticUtil } from "../util";

export const List = (): Promise<Model.IDnfResponse<Model.IServer[]>> => {
  const opt = {
    base: query.UriBuilder(staticUtil.BaseUri.Servers),
  };
  return query.Request<Model.IServer[]>(opt);
};
