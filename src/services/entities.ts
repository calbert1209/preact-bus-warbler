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
  label: string;
};

export type ScheduledStop = {
  index: number;
  hour: number;
  minute: number;
  type: ScheduleType;
  note?: string;
};

export type Route = {
  name: string;
  header: RouteHeader;
  weekday: ScheduledStop[];
  saturday: ScheduledStop[];
  holiday: ScheduledStop[];
};

export type BusRouteDictionary = Record<string, Route>;

export enum ScheduleType {
  weekday = "weekday",
  saturday = "saturday",
  holiday = "holiday",
}
