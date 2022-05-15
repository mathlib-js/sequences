import { natural } from "../src";

describe("Natural Numbers", () => {
  test("Should return an Iterable", () => {
    expect(typeof natural()[Symbol.iterator]).toBe("function");
  });

  test("Default length is 10", () => {
    expect([...natural()].length).toBe(10);
  });

  test("Specifying valid length", () => {
    const len = 5;
    expect([...natural(len)].length).toBe(len);
  });

  test("Specifying invalid length", () => {
    expect(() => [...natural(0)]).toThrow();
  });

  test("Sequence values", () => {
    expect([...natural()]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
