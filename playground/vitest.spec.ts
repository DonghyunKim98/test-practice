import { describe, test, expect } from "vitest";

const addOne = (num: number): number => num + 1;

describe("addOne", () => {
  test("addOne 함수는 숫자에 1을 더한 값을 반환한다.", () => {
    const num = 1;
    const expected = 2;

    const result = addOne(num);

    expect(result).toEqual(expected);
  });
});
