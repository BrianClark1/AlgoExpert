//O(n) time O(.) space
function firstDuplicateValue(array) {
  let hashMap = {};

  for (let i = 0; i < array.length; i++) {
    if (hashMap[array[i]] !== undefined) {
      return array[i];
    } else hashMap[array[i]] = i;
  }
  return -1;
}

//O(n) time O(1) space
function firstDuplicateValue(array) {
    for (let i = 0; i < array.length; i++) {
        const absValue = Math.abs(value);
        if (array[absValue - 1] < 0) return absValue
        array[absValue - 1] *= -1;
    }
  return -1;
}

