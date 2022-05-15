import { whole } from "../src";

describe("Whole Numbers", () => {
  test("Should return an Iterable", () => {
    expect(typeof whole()[Symbol.iterator]).toBe("function");
  });

  test("Default length is 10", () => {
    expect([...whole()].length).toBe(10);
  });

  test("Specifying valid length", () => {
    const len = 5;
    expect([...whole(len)].length).toBe(len);
  });

  test("Specifying invalid length", () => {
    expect(() => [...whole(0)]).toThrow();
  });

  test("Sequence values", () => {
    expect([...whole()]).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
