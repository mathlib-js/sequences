import { lazyCaterers } from "../src";

describe("Lazy Caterer's Sequence", () => {
  test("Should return an Iterable", () => {
    expect(typeof lazyCaterers()[Symbol.iterator]).toBe("function");
  });

  test("Default length is 10", () => {
    expect([...lazyCaterers()].length).toBe(10);
  });

  test("Specifying valid length", () => {
    const len = 5;
    expect([...lazyCaterers(len)].length).toBe(len);
  });

  test("Specifying invalid length", () => {
    expect(() => [...lazyCaterers(0)]).toThrow();
  });

  test("Sequence values", () => {
    expect([...lazyCaterers()]).toEqual([1, 2, 4, 7, 11, 16, 22, 29, 37, 46]);
  });
});
