//Reverse the order of the words in a string
//take into account alphanumeric, whitespace, and special characters
//do not use array .split('')  or .reverse() methods
//I can use join().
//I can split it manually and reverse it manually?
//loop through the string and push every index into an array
//then loop through that array
//and use a combination of push and unshift to build sub arrays and then concat them as we go
//doesnt need optimially space or time but could be a solution
//O(n) time O(n) space
//Concat inside of a for loop may be O(n2)
function reverseWordsInString(string) {
  let output = [];
  let splitArr = [];
  //maunual split;

  for (let i = 0; i < string.length; i++) {
    splitArr.push(string[i]);
  }

  let subArr = [];
  for (let j = splitArr.length - 1; j >= 0; j--) {
    if (j === 0) {
      subArr.unshift(splitArr[j]);
      output = output.concat(subArr);
    } else if (splitArr[j] === " " && splitArr[j - 1] !== " ") {
      subArr.push(splitArr[j]);
      output = output.concat(subArr);
      subArr = [];
    } else if (splitArr[j] !== " ") {
      subArr.unshift(splitArr[j]);
    } else {
      subArr.push(splitArr[j]);
    }
  }

  return output.join("");
}
