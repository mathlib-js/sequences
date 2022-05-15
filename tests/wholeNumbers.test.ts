import { wholeNumbers } from "../src";

describe("Whole Numbers", () => {
  test("Should return an Iterable", () => {
    expect(typeof wholeNumbers()[Symbol.iterator]).toBe("function");
  });

  test("Default length is 10", () => {
    expect([...wholeNumbers()].length).toBe(10);
  });

  test("Specifying valid length", () => {
    const len = 5;
    expect([...wholeNumbers(len)].length).toBe(len);
  });

  test("Specifying invalid length", () => {
    expect(() => [...wholeNumbers(0)]).toThrow();
  });

  test("Sequence values", () => {
    expect([...wholeNumbers()]).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
