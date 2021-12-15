import { multiply } from "../smoke";

describe("multiply", () =>{
  test("should multiply two positive numbers", () =>{
    expect(multiply(6,7)).toEqual(42);
  });
});
