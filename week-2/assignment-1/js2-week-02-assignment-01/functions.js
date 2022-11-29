const findTheNumberOfOddNumbers = (pMyArray) => {
  const oddArray = pMyArray.filter((item) => item % 2 === 1);
  return oddArray.length;
};

const getIndexOfFalseItem = (pMyArray) => {
  const myItemIndex = pMyArray.findIndex((item) => item === false);
  return myItemIndex;
};

const filterNumbers = (pMyArray) => {
  const numberArray = pMyArray.filter((item) => typeof item == "number");
  return numberArray;
};

const generateEmailAddress = (pMyArray) => {
  const eMailAdresse = pMyArray.map((item) =>
    item.toLowerCase().concat("@gmail.com")
  );
  return eMailAdresse;
};

export {
  findTheNumberOfOddNumbers,
  getIndexOfFalseItem,
  filterNumbers,
  generateEmailAddress,
};
