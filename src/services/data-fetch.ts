const kBaseUrl = "https://calbert1209.github.io/json-api";

enum Routes {
  kanai_ofuna = 'kanai_ofuna',
  ofuna_kanai = 'ofuna_kanai',
  kanai_totsuka = 'kanai_totsuka',
  totsuka_kanai = 'totsuka_kanai',
};

// https://www.petermorlion.com/iterating-a-typescript-enum/
function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter(k => Number.isNaN(+k)) as K[];
}

export const kRouteUrls = enumKeys(Routes).map(key => `${kBaseUrl}/${key}.json`);

export const kRouteLabels = {
  [Routes.kanai_ofuna]: "金井 → 大船",
  [Routes.ofuna_kanai]: "大船 → 金井",
  [Routes.kanai_totsuka]: "金井 → 戸塚",
  [Routes.totsuka_kanai]: "戸塚 → 金井"
}