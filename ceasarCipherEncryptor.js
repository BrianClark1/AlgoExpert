//shifting the input string characters by key places in the alphabet
//definitely going to need a reference alphabet string

function caesarCipherEncryptor(string, key) {
  let reference = "abcdefghijklmnopqrstuvwxyz".split("");

  let output = [];
  let newKey = key % 26;

  for (let i = 0; i < string.length; i++) {
    let idx = reference.indexOf(string[i]);
    output.push(getNewLetter(string[i], newKey, reference));
  }

  return output.join("");
}
const getNewLetter = (letter, key, alphabet) => {
  const newLettercode = alphabet.indexOf(letter) + key;
  return alphabet[newLettercode % 26];
};
