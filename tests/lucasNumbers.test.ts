import { lucasNumbers } from "../src";

describe("Lucas Numbers" , () => {
  test("Should return an Iterable", () => {
    expect(typeof lucasNumbers()[Symbol.iterator]).toBe("function");
  });

  test("Default length is 10", () => {
    expect([...lucasNumbers()].length).toBe(10);
  });

  test("Specifying valid length", () => {
    const len = 5;
    expect([...lucasNumbers(len)].length).toBe(len);
  });

  test("Specifying invalid length", () => {
    expect(() => [...lucasNumbers(0)]).toThrow();
  });

  test("Sequence values", () => {
    expect([...lucasNumbers()]).toEqual([2, 1, 3, 4, 7, 11, 18, 29, 47, 76]);
  });
});
