import { pell } from "../src";

describe("Pell Numbers" , () => {
  test("Should return an Iterable", () => {
    expect(typeof pell()[Symbol.iterator]).toBe("function");
  });

  test("Default length is 10", () => {
    expect([...pell()].length).toBe(10);
  });

  test("Specifying valid length", () => {
    const len = 5;
    expect([...pell(len)].length).toBe(len);
  });

  test("Specifying invalid length", () => {
    expect(() => [...pell(0)]).toThrow();
  });

  test("Sequence values", () => {
    expect([...pell(10)]).toEqual([0, 1, 2, 5, 12, 29, 70, 169, 408, 985]);
  });
});
