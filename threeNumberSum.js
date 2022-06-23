//Sliding Window Solution;
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let output = [];

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const sum = array[i] + array[left] + array[right];
      if (sum === targetSum) {
        output.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (sum < targetSum) {
        left++;
      } else if (sum > targetSum) {
        right--;
      }
    }
  }
  return output;
}
