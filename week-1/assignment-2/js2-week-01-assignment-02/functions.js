const calculateTotal = (pNumber1, pNumber2, pNumber3) => {
  let result = pNumber1 + pNumber2 + pNumber3;
  return result;
};

const calculateTotalOfItemsOfArray = (pArr) => {
  let result = 0;
  for (let index = 0; index < pArr.length; index++) {
    result += pArr[index];
  }
  return result;
};

const reverseTheString = (pMyString) => {
  pMyString = pMyString.toLowerCase().split("").reverse().join("");
  return pMyString;
};

const isPalindrome = (pMyPalindrome) => {
  let palindrome = pMyPalindrome.split("").reverse().join("");
  if (palindrome === pMyPalindrome) {
    return palindrome;
  }
};

export {
  calculateTotal,
  calculateTotalOfItemsOfArray,
  reverseTheString,
  isPalindrome,
};
