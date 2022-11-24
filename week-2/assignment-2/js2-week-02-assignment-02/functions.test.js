import {
  changeEmailFromGmailToHicoders,
  findSuperNumbers,
} from "./functions.js";

test('should be "hicoders41@hicoders.ch" in the 0th of the new array', () => {
  let result = changeEmailFromGmailToHicoders([
    "Switzerland55@gmail.com",
    "Zurich4155@gmail.com",
    "HiCoders41@gmail.com",
  ]);
  expect(result[0]).toBe("hicoders41@hicoders.ch");
});

test('should be "awe414243_abc@hicoders.ch" in the 0th of the new array', () => {
  let result = changeEmailFromGmailToHicoders([
    "dbc41def@gmail.com",
    "zyx48@gmail.com",
    "awE414243_abc@gmail.com",
  ]);
  expect(result[0]).toBe("awe414243_abc@hicoders.ch");
});

test("should be the 153 in the 0th of the new array", () => {
  let result = findSuperNumbers([455, 789, 153]);
  expect(result[0]).toBe(153);
});

test("the length of the new array should be 1", () => {
  let result = findSuperNumbers([455, 789, 153]);
  expect(result.length).toBe(1);
});

test("the sum of the 0th and 1st elements of the array should be 524", () => {
  let result = findSuperNumbers([371, 789, 153, 555, 777, 998]);
  expect(result[0] + result[1]).toBe(524);
});

test("the length of the new array should be 2", () => {
  let result = findSuperNumbers([371, 789, 153, 555, 777, 998]);
  expect(result.length).toBe(2);
});
