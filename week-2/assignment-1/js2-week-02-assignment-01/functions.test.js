import {
  findTheNumberOfOddNumbers,
  getIndexOfFalseItem,
  filterNumbers,
  generateEmailAddress,
} from "./functions.js";

test("the number of odd numbers should be 2", () => {
  let result = findTheNumberOfOddNumbers([3, 6, 7, 8, 4, 2]);
  expect(result).toBe(2);
});

test("the number of odd numbers should be 4", () => {
  let result = findTheNumberOfOddNumbers([5, 91, 67, 45, 6, 22]);
  expect(result).toBe(4);
});

test("index number should be 2", () => {
  let result = getIndexOfFalseItem([45, "Hi", false, true, 23, "Coders"]);
  expect(result).toBe(2);
});

test("index number should be 0", () => {
  let result = getIndexOfFalseItem([false, "Hi", true, 23, "false"]);
  expect(result).toBe(0);
});

test("should be the 23 in the 0th of the new array", () => {
  let result = filterNumbers([false, "Hi", true, 23, "false", 55]);
  expect(result[0]).toBe(23);
});

test("the length of the new array should be 5", () => {
  let result = filterNumbers([33, "Hi", 44, true, 23, "false", 66, 99]);
  expect(result.length).toBe(5);
});

test('should be the "huseyin@gmail.com" in the 0th of the new array', () => {
  let result = generateEmailAddress(["Huseyin", "Ahmet", "Mehmet"]);
  expect(result[0]).toBe("huseyin@gmail.com");
});

test('should be the "mehmet@gmail.com" in the 2th of the new array', () => {
  let result = generateEmailAddress(["Huseyin", "Ahmet", "Mehmet"]);
  expect(result[2]).toBe("mehmet@gmail.com");
});
