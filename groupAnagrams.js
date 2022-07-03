//Being by looping through the words array, and sorting each string in place and
//adding them to a hashmap, with the key being its sorted and the value its not sorted
//as your looping through you're sorting an element and then checking if its the hashmap
//if it exists we have an anagram, push the value of the sorted key, and the current
//unsorted element into an output array
//How to sort a string into its alphabetical counterpart

//O(n2) with a sort function inside of a for loop
//n2logn maybe
//O(n) space complexity
function groupAnagrams(words) {
  let output = [];
  let hashMap = {};

  for (let i = 0; i < words.length; i++) {
    let sortWord = words[i].split("").sort().join("");
    if (hashMap[sortWord]) {
      // output.push([hashMap[sortWord],words[i] ])
      hashMap[sortWord].push(words[i]);
    } else {
      hashMap[sortWord] = [words[i]];
    }
  }

  for (bucket in hashMap) {
    output.push(hashMap[bucket]);
  }
  return output;
}
