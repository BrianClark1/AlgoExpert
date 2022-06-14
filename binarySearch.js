function binarySearch(array, target) {
  let pointer1 = 0;
  let pointer2 = array.length - 1;
  let midpoint = Math.floor(array.length / 2);

  while (pointer1 <= pointer2) {
    if (target === array[midpoint]) {
      return midpoint;
    }
    if (target > array[midpoint]) {
      pointer1 = midpoint + 1;
      midpoint = Math.floor((pointer2 + pointer1) / 2);
    }
    if (target < array[midpoint]) {
      pointer2 = midpoint - 1;
      midpoint = Math.floor((pointer2 + pointer1) / 2);
    }
  }
  return -1;
}
