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

  for (let i = 0; i < caesarArr.length; i++) {
    const isNotANumber = isNaN(parseInt(caesarArr[i], 10));
    const specialCharReg = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const isNotASpecialChar = !specialCharReg.test(caesarArr[i]);
    const isUpperCase = caesarArr[i] === caesarArr[i].toUpperCase();

    if (isNotANumber && isNotASpecialChar) {
      const index = isUpperCase
        ? latinAlphabetArray.indexOf(caesarArr[i])
        : latinAlphabetArray.indexOf(caesarArr[i].toUpperCase());
      const newLetterPosition = (index + step) % latinAlphabetArray.length;
      caesarArr[i] = isUpperCase
        ? latinAlphabetArray[newLetterPosition]
        : latinAlphabetArray[newLetterPosition].toLowerCase();
    }
  }

  return caesarArr.join("");
};

export default caesar13;
