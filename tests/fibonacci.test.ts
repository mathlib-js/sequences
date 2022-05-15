import { fibonacci } from "../src";

describe("Fibonacci Series" , () => {
  test("Should return an Iterable", () => {
    expect(typeof fibonacci()[Symbol.iterator]).toBe("function");
  });

  test("Default length is 10", () => {
    expect([...fibonacci()].length).toBe(10);
  });

  test("Specifying valid length", () => {
    const len = 5;
    expect([...fibonacci(len)].length).toBe(len);
  });

  test("Specifying invalid length", () => {
    expect(() => [...fibonacci(0)]).toThrow();
  });

  test("Sequence values", () => {
    expect([...fibonacci()]).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
