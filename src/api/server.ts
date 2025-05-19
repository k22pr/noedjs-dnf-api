import type * as Model from "../model";
import { query, staticUtil } from "../util";

export const List = () => {
  const opt = {
    base: query.UriBuilder(staticUtil.baseUri.Servers),
  };
  return query.Request<Model.IServer[]>(opt);
};
