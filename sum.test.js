import sum from "./sum.js";

test("add 2 and 2 results 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("add 2 and 3 results 5", () => {
  expect(sum(2, 3)).toBe(5);
});
