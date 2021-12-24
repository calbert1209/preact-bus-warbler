import { kRouteUrls } from "../data-fetch";

describe("route urls", () => {
  test("should be generated correctly", () => {
    expect(kRouteUrls).toMatchObject([
      "https://calbert1209.github.io/json-api/kanai_ofuna.json",
      "https://calbert1209.github.io/json-api/ofuna_kanai.json",
      "https://calbert1209.github.io/json-api/kanai_totsuka.json",
      "https://calbert1209.github.io/json-api/totsuka_kanai.json",
    ]);
  });
});
