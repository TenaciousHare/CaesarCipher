const caesar13 = function (string) {
  if (typeof string !== "string") {
    throw new Error("The given argument is not a string!");
  }
  if (string === "") {
    throw new Error("The given argument is empty!");
  }

  const latinAlphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const step = 13;
  const caesarArr = string.split("");
  const cipheredArr = [];

  for (let i = 0; i < caesarArr.length; i++) {
    const NotANumberReg = /[A-Z]/i;
    const isNotANumber = NotANumberReg.test(caesarArr[i]);
    const specialCharReg = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
    const isNotASpecialChar = !specialCharReg.test(caesarArr[i]);
    const isUpperCase = caesarArr[i] === caesarArr[i].toUpperCase();

    if (isNotANumber && isNotASpecialChar) {
      const index = isUpperCase
        ? latinAlphabetArray.indexOf(caesarArr[i])
        : latinAlphabetArray.indexOf(caesarArr[i].toUpperCase());
      const newLetterPosition = (index + step) % latinAlphabetArray.length;
      cipheredArr[i] = isUpperCase
        ? latinAlphabetArray[newLetterPosition]
        : latinAlphabetArray[newLetterPosition].toLowerCase();
    } else {
      cipheredArr[i] = caesarArr[i];
    }
  }

  return cipheredArr.join("");
};

export default caesar13;
