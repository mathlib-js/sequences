import { factorial } from "../src";

describe("Factorials", () => {
  test("Should return an Iterable", () => {
    expect(typeof factorial()[Symbol.iterator]).toBe("function");
  });

  test("Default length is 10", () => {
    expect([...factorial()].length).toBe(10);
  });

  test("Specifying valid length", () => {
    const len = 5;
    expect([...factorial(len)].length).toBe(len);
  });

  test("Specifying invalid length", () => {
    expect(() => [...factorial(0)]).toThrow();
  });

  test("Sequence values", () => {
    expect([...factorial()]).toEqual([1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]);
  });
});
