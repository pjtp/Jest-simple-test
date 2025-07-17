import { add } from "./math";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds -1 + -2 to equal -3", () => {
  expect(add(-1, -2)).toBe(-3);
});

test("adds 0 + 0 to equal 0", () => {
  expect(add(0, 0)).toBe(0);
});

test("throws when input is not a number", () => {
  expect(() => add("1", 2)).toThrow("Invalid input");
});
