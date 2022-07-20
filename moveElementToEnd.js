//for loop
//splice, which adds or removes an element in the original array, worse case we hve to shift n-1 elements 
//splice nested inside of a for loop is O(n2) time
//O(1) space
function moveElementToEnd(array, toMove) {
  let counter = 0;

 for (let i = 0; i < array.length; i++) {
    if (array[i] === toMove) {
      counter++;
      array.splice(i, 1);
      i = -1;
    }
  }
  console.log(counter);

  for (let j = 1; j <= counter; j++) {
    array.push(toMove);
  }
  return array;
}

//Elegant 2 pointer solution 
//O(n) time O(1) space
function moveElementToEnd(array, toMove) {
  let pointer1 = 0;
  let pointer2 = array.length - 1;

  while (pointer1 < pointer2) {
    if (array[pointer1] !== toMove) pointer1++;
    if (array[pointer2] === toMove) pointer2--;
    else {
      [array[pointer1], array[pointer2]] = [array[pointer2], array[pointer1]];
    }
  }
  return array;
}
