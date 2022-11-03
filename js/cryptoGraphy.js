const inputEncrypt = document.querySelector(".EncryptInput");
const btnGenerator = document.querySelector(".btnGen");
const kNumber = document.getElementById("k-Number");

let value = "";
let newValue = "";
let valueAfterEncryption = "";
let kNum = 0;
let spacesPlace = [];
let eachLetterNumber = [];

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

btnGenerator.addEventListener("click", () => {
  value = inputEncrypt.value;
  kNum = Number(kNumber.value);
  rePhrase(value);
  changeFromLetToNum(newValue);
  newAddedKNumber();
  changeNewNumbersToLet();
  combineTheArray();
  console.log(newValue);
  console.log(spacesPlace);
});

function rePhrase(input) {
  newValue = "";
  spacesPlace = [];
  for (let i = 0; i < input.length; i++) {
    if (!(input.charAt(i) == " ")) {
      newValue += input.charAt(i).toLowerCase();
    } else {
      spacesPlace.push(i);
    }
  }
}

function changeFromLetToNum(input) {
  eachLetterNumber = [];
  for (let i = 0; i < input.length; i++) {
    let charAt = input.charAt(i);
    for (let i = 0; i < letters.length; i++) {
      if (charAt == letters[i]) {
        eachLetterNumber.push(i);
      }
    }
  }
  console.log(eachLetterNumber);
}

function newAddedKNumber() {
  for (let i = 0; i < eachLetterNumber.length; i++) {
    const value = eachLetterNumber[i] + kNum;
    if (value > letters.length) {
      eachLetterNumber[i] = value - 26;
    } else {
      eachLetterNumber[i] += kNum;
    }
  }
  console.log(eachLetterNumber);
}

function changeNewNumbersToLet() {
  for (let i = 0; i < eachLetterNumber.length; i++) {
    eachLetterNumber[i] = letters[eachLetterNumber[i]];
  }
  console.log(eachLetterNumber);
}

function combineTheArray() {
  let valueAfterEncryption = "";
  for (let i = 0; i < eachLetterNumber.length; i++) {
    if (i == spacesPlace[0]) {
      valueAfterEncryption += " ";
      valueAfterEncryption += eachLetterNumber[i];
    } else {
      valueAfterEncryption += eachLetterNumber[i];
    }
  }
  console.log(valueAfterEncryption);
}
