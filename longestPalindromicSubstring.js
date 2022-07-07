//given an input string
//find the longest palindrome substring
//smallest palindrome can be a single character

//Can store all the characters and their frequencies in a hashmap
//we can loop through the string and check whether a given indice has
// a frequency greater than two, if so, we can check if its a palindrome as well as its
//associated length

//Once we find an index that has a frequency of 2 (starting from the beginning of the string)
// we can place a second pointer at the end of the string and have it move iterate down until
//it reaches the matching character, once it reaches the matchting character
//we can start a palindrome counter and verify that each pointer is equal to eachother
//and then once the pointers meet or cross we can save it or compare it against the current longest substring
// if the palindrome is no longer valid, break out of the nested while loop
// initalize longest substring at 1

function longestPalindromicSubstring(string) {
  let hashMap = {};

  for (let i = 0; i < string.length; i++) {
    if (hashMap[i]) hashMap[i]++;
    else hashMap[i] = 1;
  }

  let longestSubStrLen = 1;
  let palindromePointer = string.length - 1;

  for (let j = 0; j < string.length; j++) {
    //Find a potential Palindrome
    if (hashMap[string[j]] > 1) {
      let pointerStart = j;
      let currentPalinLen = 1;
      for (let k = string.length - 1; k > j; k--) {
        //Start of a Palindrome
          while (k > pointerStart) {
              if (string[pointerStart] === string[k]) {
                  currentPalinLen++;
                  pointerStart++;
                  k--;
              }
              else {
                  if (currentPalinLen > longestSubStrLen) longestSubStrLen = currentPalinLen;
                  break;
              }
          }
      }
    }
  }
}
