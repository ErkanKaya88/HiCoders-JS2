import {
  calculateTotal,
  calculateTotalOfItemsOfArray,
  reverseTheString,
  isPalindrome,
} from './functions.js';

test('the sum of the 3 numbers should give the correct result.', () => {
  let result = calculateTotal(4, 2, 7);
  expect(result).toBe(13);
});

test('should correctly sum the elements of the given array.', () => {
  let result = calculateTotalOfItemsOfArray([4, 2, 14]);
  expect(result).toBe(20);
});

test('the given string value must be written in reverse and lowercase.', () => {
  let result = reverseTheString('HiCoders');
  expect(result).toBe('sredocih');
});

test('should tell you whether the given value is a palindrome.', () => {
  let result = isPalindrome('kek');
  expect(result).toBeTruthy();
});
