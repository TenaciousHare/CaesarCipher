const caesar13 = function (string) {
  const latinAlphabetArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const alphabetCenter = latinAlphabetArray.length / 2;

  if (string === "") {
    throw new Error("The given argument is empty!");
  } else if (typeof string !== "string") {
    throw new Error("The given argument is not a string!");
  }

  const caesarArr = string.split("");

  for (let i = 0; i < caesarArr.length; i++) {
    const isNotANumber = isNaN(parseInt(caesarArr[i], 10));
    const isUpperCase = caesarArr[i] === caesarArr[i].toUpperCase();

    if (isNotANumber) {
      let index = isUpperCase
        ? latinAlphabetArray.indexOf(caesarArr[i])
        : latinAlphabetArray.indexOf(caesarArr[i].toUpperCase());
      let newLetterPosition =
        (index + alphabetCenter) % latinAlphabetArray.length;
      caesarArr[i] = isUpperCase
        ? latinAlphabetArray[newLetterPosition]
        : latinAlphabetArray[newLetterPosition].toLowerCase();
    }
  }

  return caesarArr.join("");
};

export default caesar13;
