//Can obviously be done with 3 for loops to find each number
//However I have suspicions that It can be done in a single loop
//Possibly in constant space
//Also a suspicion that It can be done without sorting the output array as well

//My attempt
//I will create an output array
//I will create 3 variables to keep track of the 3 largest
//I will loop thorugh the array and make comparisons with indexes
//and largest variables to extrapolate the 3 largest
//Then sort the output array.

//O(nlogn) time and O(1) space, always 3 numbers
//I presume optimal is O(n) O(1) we will see though
//Can have conditionals after each for loop to switch position.
//Will render time complexity O(3n), worse than optimal, but a solution nontheless 
function findThreeLargestNumbers(array) {
  let output = [];

  //Find largest
  let max = -Infinity;
  let maxIdx;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      maxIdx = i;
    }
  }
  output.push(max);
  array.splice(maxIdx, 1);

  let secondLargest = -Infinity;
  let secondIdx;
  for (let k = 0; k < array.length; k++) {
    if (array[k] > secondLargest) {
      secondLargest = array[k];
      secondIdx = k;
    }
  }
  output.push(secondLargest);
  array.splice(secondIdx, 1);

  let thirdLargest = -Infinity;
  for (let j = 0; j < array.length; j++) {
    if (array[j] > thirdLargest) {
      thirdLargest = array[j];
      thirdIdx = j;
    }
  }

  output.push(thirdLargest);

  return output.sort((a, b) => a - b);
}
