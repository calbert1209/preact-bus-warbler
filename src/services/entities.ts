export enum RouteKey {
  kanai_ofuna = "kanai_ofuna",
  ofuna_kanai = "ofuna_kanai",
  kanai_totsuka = "kanai_totsuka",
  totsuka_kanai = "totsuka_kanai",
}

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

export type BusRouteDictionary = Record<string, Route>;
