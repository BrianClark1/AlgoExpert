//Iterate over string until the second to last element
//Compare the current value to the next value
//if they are the same, increment a counter variable
//if they are the same && the counter variable is 9
//concatenate the counter variable (9) with the current indexed element
//if they are dissimilar concatenate the counter variable plus the previous index to our output string

//O(n) time O(n) space
function runLengthEncoding(string) {
  let output = "";
  let counter = 1;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      if (counter === 9) {
        output += counter + string[i];
        counter = 0;
      }
      counter++;
    } else {
      output += counter + string[i];
      counter = 1;
    }
  }

  return output;
}
