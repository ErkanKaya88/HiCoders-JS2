const changeEmailFromGmailToHicoders = (pEMailList) => {
  return pEMailList
    .filter((eMail) => eMail.includes("41"))
    .sort()
    .map((eMail) => eMail.toLowerCase())
    .map((eMail) => eMail.replace("gmail.com", "hicoders.ch"));
};

const findSuperNumbers = (pNumberList) => {
  let numberArray = [];
  pNumberList.map((item) => {
    const digits = item
      .toString()
      .split("")
      .map((digit) => Math.pow(Number(digit), 3))
      .reduce((total, digit) => total + digit);
    if (digits === item) {
      numberArray.push(item);
    }
  });
  return numberArray;
};

export { changeEmailFromGmailToHicoders, findSuperNumbers };
