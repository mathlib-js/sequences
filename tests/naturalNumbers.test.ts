import { naturalNumbers } from "../src";

describe("Natural Numbers", () => {
  test("Should return an Iterable", () => {
    expect(typeof naturalNumbers()[Symbol.iterator]).toBe("function");
  });

  test("Default length is 10", () => {
    expect([...naturalNumbers()].length).toBe(10);
  });

  test("Specifying valid length", () => {
    const len = 5;
    expect([...naturalNumbers(len)].length).toBe(len);
  });

  test("Specifying invalid length", () => {
    expect(() => [...naturalNumbers(0)]).toThrow();
  });

  test("Sequence values", () => {
    expect([...naturalNumbers()]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
