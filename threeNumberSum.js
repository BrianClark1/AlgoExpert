//Sliding Window Solution;
function threeNumberSum(array, targetSum) {
  //Sort the array to enable us to use pointers
  array.sort((a, b) => a - b);
  //Initalize an output array
  let output = [];

  //Loop through the array, however stop at one before the last element since the left pointer is always 1 ahead of the current index
  for (let i = 0; i < array.length - 2; i++) {
    //intialize left pointers
    let left = i + 1;
    //initalize right pointer
    let right = array.length - 1;
    //While the left is equal to the right ==> So we dont double the work and cross our tracks
    //If the two pointers cross, then we already checked all the viable combinations
    while (left < right) {
      //compute the sum of our 3 elements
      const sum = array[i] + array[left] + array[right];
      //See if its equal to the targetSum
      if (sum === targetSum) {
        //If so, push the elements in, increasing order => denoted by the pointers
        output.push([array[i], array[left], array[right]]);
        //Increment each pointer to continue the process
        left++;
        right--;
        //If the sum is less than, move left pointer forward to a higher number
      } else if (sum < targetSum) {
        left++;
        //if sum is too small, move right pointer to the left (a smaller number)
      } else if (sum > targetSum) {
        right--;
      }
    }
  }
  return output;
}
