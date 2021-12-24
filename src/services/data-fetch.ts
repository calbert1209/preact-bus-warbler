const kBaseUrl = "https://calbert1209.github.io/json-api";

enum RouteKey {
  kanai_ofuna = "kanai_ofuna",
  ofuna_kanai = "ofuna_kanai",
  kanai_totsuka = "kanai_totsuka",
  totsuka_kanai = "totsuka_kanai",
}

// https://www.petermorlion.com/iterating-a-typescript-enum/
function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
}

export const kRouteUrls = enumKeys(RouteKey).map(
  (key) => `${kBaseUrl}/${key}.json`
);

export const kRouteLabels = {
  [RouteKey.kanai_ofuna]: "金井 → 大船",
  [RouteKey.ofuna_kanai]: "大船 → 金井",
  [RouteKey.kanai_totsuka]: "金井 → 戸塚",
  [RouteKey.totsuka_kanai]: "戸塚 → 金井",
};

export type RouteHeader = {
  busStop: string;
  dest: string;
  fetchDate: string;
  publishDate: string;
};

export type ScheduledStop = {
  index: number;
  hour: number;
  minute: number;
  type: string;
};

export type Route = {
  name: string;
  header: RouteHeader;
  times: ScheduledStop[];
};
