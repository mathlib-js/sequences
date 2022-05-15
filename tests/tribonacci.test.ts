import { tribonacci } from "../src";

describe("Tribonacci Series" , () => {
  test("Should return an Iterable", () => {
    expect(typeof tribonacci()[Symbol.iterator]).toBe("function");
  });

  test("Default length is 10", () => {
    expect([...tribonacci()].length).toBe(10);
  });

  test("Specifying valid length", () => {
    const len = 5;
    expect([...tribonacci(len)].length).toBe(len);
  });

  test("Specifying invalid length", () => {
    expect(() => [...tribonacci(0)]).toThrow();
  });

  test("Sequence values", () => {
    expect([...tribonacci()]).toEqual([0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
  });
});
