//Traverse the spiral array such that the nxm matrix can be returned as a one-dimensional matrix in spiral order
//There spiral array does not have to be in sorted order thus we need to find a way to effectively traverse
//For some reason the first thing that comes to mind to me is pointers
//Spiral Array Traversing means the following:
//Going through the entirety of the first array
//The last element in the other arrays
//The entirety of the last array
//First element of the remaining arrays
//and then repeat? Until there are no elements remaining => maybe recursion
//Mutate the original array

// O(n) time O(n) space
function spiralTraverse(array, output = []) {
  if (array[0] === undefined) return output;
  else {
    //First row
    for (let i = 0; i < array[0].length; i++) {
      if (array[0][i]) {
        output.push(array[0][i]);
      }
    }
    //remove first element
    array.shift();

    //Get last element from other arrays
    for (let j = 0; j < array.length; j++) {
      if (array[j][array[j].length - 1]) {
        output.push(array[j][array[j].length - 1]);
        array[j].pop();
      }
    }
    //The entirety of the last array
    if (array[array.length - 1]) {
      for (let k = array[array.length - 1].length - 1; k >= 0; k--) {
        if (array[array.length - 1][k]) {
          output.push(array[array.length - 1][k]);
        }
      }
      //remove last element
      array.pop();
    }

    //First element of the remaining arrays
    for (let l = array.length - 1; l >= 0; l--) {
      if (array[l][0]) {
        output.push(array[l][0]);
        array[l].shift();
      }
    }

    return spiralTraverse(array, output);
  }
}
