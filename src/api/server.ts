import { Query, Static, Params } from "../util";
import * as Model from "../model";

export const List = (): Promise<Model.DnfResponse<Model.Server[]>> => {
  let opt = {
    base: Query.UriBuilder(Static.BaseUri.Servers),
  };
  return Query.Request<Model.Server[]>(opt);
};
