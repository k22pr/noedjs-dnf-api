import type * as Model from "../model";
import { Query, Static } from "../util";

export const List = (): Promise<Model.DnfResponse<Model.Server[]>> => {
  const opt = {
    base: Query.UriBuilder(Static.BaseUri.Servers),
  };
  return Query.Request<Model.Server[]>(opt);
};
