import { BusRouteDictionary, Route, RouteKey } from "./entities";

const kBaseUrl = "https://calbert1209.github.io/json-api";

// https://www.petermorlion.com/iterating-a-typescript-enum/
function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
}

export const kRouteLabels = {
  [RouteKey.kanai_ofuna]: "金井 → 大船",
  [RouteKey.ofuna_kanai]: "大船 → 金井",
  [RouteKey.kanai_totsuka]: "金井 → 戸塚",
  [RouteKey.totsuka_kanai]: "戸塚 → 金井",
};

export const kRouteUrls = enumKeys(RouteKey).map(
  (key) => `${kBaseUrl}/${key}.json`
);

export const fetchUrls = async (urls: string[]) => {
  const promises = urls.map((url) => window.fetch(url));
  const data = [];
  for (const p of promises) {
    try {
      const resp = await p;
      const json: Route = await resp.json();
      data.push(json);
    } catch (e) {
      console.error(e);
    }
  }

  return data.reduce((lookup: BusRouteDictionary, item) => {
    const key = item.name;
    lookup[key] = item;
    return lookup;
  }, {});
};
