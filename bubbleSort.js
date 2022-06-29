//Have a while true while loop
//the while loop will be making comparisons and swapping indices accordingly as it traverses through the array
//if it moves through the array and makes no swaps, the boolean is switched to false
//meaning the sorting process is complete and we can return the array
//its going to take multiple passes through so once idx reaches the end we will need to reset

function bubbleSort(array) {
  let trigger = true;
  while (trigger) {
    trigger = false;
    for (let i = 0; i <= array.length - 2; i++) {
      if (array[i] > array[i + 1]) {
        //swap
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        trigger = true;
      }
    }
  }
  return array;
}
