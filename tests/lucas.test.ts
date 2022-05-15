import { lucas } from "../src";

describe("Lucas Numbers" , () => {
  test("Should return an Iterable", () => {
    expect(typeof lucas()[Symbol.iterator]).toBe("function");
  });

  test("Default length is 10", () => {
    expect([...lucas()].length).toBe(10);
  });

  test("Specifying valid length", () => {
    const len = 5;
    expect([...lucas(len)].length).toBe(len);
  });

  test("Specifying invalid length", () => {
    expect(() => [...lucas(0)]).toThrow();
  });

  test("Sequence values", () => {
    expect([...lucas()]).toEqual([2, 1, 3, 4, 7, 11, 18, 29, 47, 76]);
  });
});
