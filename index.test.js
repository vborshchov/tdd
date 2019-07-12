const Add = require("./index.js");

test("adds 1 + 2 to equal 3", () => {
  expect(Add("1, 2")).toBe(3);
});

test("adds 1 + 2 to equal 3", () => {
  expect(Add("1,2")).toBe(3);
});

test("handle only one number '1'", () => {
  expect(Add("1")).toBe(1);
});

test("for an empty string it sould return 0", () => {
  expect(Add("")).toBe(0);
});


test("unknown amount of numbers", () => {
  expect(Add("1,2,3,4,5,6,7,8,9")).toBe(45);
});

test("new lines between numbers", () => {
  expect(Add("1\n2,3")).toBe(6);
});

test("handle invalid input", () => {
  expect(() => Add("1,\n")).toThrow("Invalid input");
});