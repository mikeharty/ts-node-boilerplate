import { hello } from "../src/index";

describe("hello function", () => {
  it("says hello to Mike", () => {
    expect(hello("Mike")).toEqual("Hello Mike!");
  });
});
