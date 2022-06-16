//Check if Palindrome
//Need to reverse a string and compare with input value

function isPalindrome(string) {
  let output = "";
  for (let i = string.length - 1; i >= 0; i--) {
    output += string[i];
  }
  if (output === string) return true;
  return false;
}


//O(n/2) ==> O(n) time 
//O(1) space 
function isPalindrome(string) {
  let pointer1 = 0
  let pointer2 = string.length-1

  while (pointer1 < pointer2) {
  if (string[pointer1] !== string[pointer2]) return false;
    pointer1++;
    pointer2--;
  }
  return true;
}

// O(n) space complexity 
// O(n) time complexity 
function isPalindrome(string, output = "", idx = string.length -1) {
  //Base Case 
    if (output === string) {
      return true;
    }
    else if (output.length === string.length) {
      return false;
    }
    output += string[idx];
    idx--;

    return isPalindrome(string, output, idx)
}

