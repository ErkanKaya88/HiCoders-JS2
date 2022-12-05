const isTheWordSplit = (pArray) => {
  const array2 = [];
  let result = [];
  array2.push(pArray[0], pArray[1].split(","));
  const array3 = array2.flat(1);
  for (let index = 0; index < array3.length; index++) {
    for (let j = 0; j < array3.length; j++) {
      if (array3[index] + array3[j] === array3[0]) {
        result.push(array3[index], array3[j]);
      }
    }
  }
  if (result.length === 2) {
    return result.toString();
  }
  return "not possible";
};

export { isTheWordSplit };
