/////////////////////////////////////////
// Encryption Program

const inputEncrypt = document.querySelector(".EncryptInput");
const btnGenerator = document.getElementById("btnEncGen");
const kNumber = document.getElementById("k-Number");
const ans = document.getElementById("placeOfAns");

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
  value = "";
  newValue = "";
  valueAfterEncryption = "";
  kNum = 0;
  eachLetterNumber = [];
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
  for (let i = 0; i < input.length; i++) {
    newValue += input.charAt(i).toLowerCase();
  }
}

function changeFromLetToNum(input) {
  eachLetterNumber = [];
  for (let i = 0; i < input.length; i++) {
    let charAt = input.charAt(i);
    if (!(charAt == " ")) {
      for (let i = 0; i < letters.length; i++) {
        if (charAt == letters[i]) {
          eachLetterNumber.push(i);
        }
      }
    } else {
      eachLetterNumber.push(-1);
    }
  }
  console.log(eachLetterNumber);
}

function newAddedKNumber() {
  for (let i = 0; i < eachLetterNumber.length; i++) {
    if (eachLetterNumber[i] != -1) {
      const value = eachLetterNumber[i] + kNum;
      if (value >= letters.length) {
        eachLetterNumber[i] = value - 26;
      } else {
        eachLetterNumber[i] += kNum;
      }
    }
  }
  console.log(eachLetterNumber);
}

function changeNewNumbersToLet() {
  for (let i = 0; i < eachLetterNumber.length; i++) {
    if (eachLetterNumber[i] != -1) {
      eachLetterNumber[i] = letters[eachLetterNumber[i]];
    }
  }

  console.log(eachLetterNumber);
}

function combineTheArray() {
  valueAfterEncryption = "";

  for (let i = 0; i < eachLetterNumber.length; i++) {
    if (eachLetterNumber[i] == -1) {
      valueAfterEncryption += " ";
    } else {
      valueAfterEncryption += eachLetterNumber[i];
    }
  }
  ans.innerHTML = valueAfterEncryption;
}

////////////////////////////////////////
// Decryption Program

const inputDecrypt = document.getElementById("DecryptInput");
const btnDecGenerator = document.getElementById("btnDecGen"); //k-NumberD
const kNumberDec = document.getElementById("k-NumberD");

btnDecGenerator.addEventListener("click", () => {
  value = "";
  newValue = "";
  valueAfterEncryption = "";
  kNum = 0;
  eachLetterNumber = [];
  value = inputDecrypt.value;
  kNum = Number(kNumberDec.value);
  rePhrase(value);
  changeFromLetToNum(newValue);
  newAddedKNumberDecryption();
  changeNewNumbersToLet();
  combineTheArray();
  console.log(kNum);
});

function newAddedKNumberDecryption() {
  for (let i = 0; i < eachLetterNumber.length; i++) {
    if (eachLetterNumber[i] != -1) {
      const value = eachLetterNumber[i] - kNum;
      if (value < 0) {
        eachLetterNumber[i] = value + 26;
      } else {
        eachLetterNumber[i] -= kNum;
      }
    }
  }
  console.log(eachLetterNumber);
}

////////////////////////////////////////////////
// Reset Answer

const reset = document.getElementById("resetbtn");

reset.addEventListener("click", () => {
  anime({
    targets: ".result",
    scale: 1,
    easing: "easeOutBack",
    opacity: 0,
    delay: 500,
  });

  anime({
    targets: ".answer",
    opacity: 0,
    easing: "easeOutSine",
    delay: 600,
    duration: 300,
  });

  anime({
    targets: ".showingAnswer",
    opacity: 0,
    easing: "easeOutSine",
    delay: 600,
    duration: 300,
  });

  anime({
    targets: ".reset",
    opacity: 0,
    easing: "easeOutSine",
    delay: 600,
    duration: 300,
  });

  setTimeout(() => {
    document.querySelector(".result").classList.add("disNone");
    document.querySelector(".answer").classList.add("disNone");
    document.querySelector(".showingAnswer").classList.add("disNone");
    document.querySelector(".reset").classList.add("disNone");
  }, 1000);
});
