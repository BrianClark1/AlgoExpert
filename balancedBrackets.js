//Utilize a stack to validate and traverse the input string
//if there is an opening brakcet we push it on the stack
//if its closing => we referse a hashtable with key value pairs
//peek at the top of the stack and see if they match
//if they do, continue, lest we return false
//check if the stack length is 0, this covers od length edge case


// O(n) time => for loop
//O(n) space with stack auxillary data structure dependant on input string length 
function balancedBrackets(string) {
  let stack = [];
  let hashMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(" || string[i] === "{" || string[i] === "[")
      stack.push(string[i]);
    else if (string[i] === ")" || string[i] === "}" || string[i] === "]") {
      if (stack.length === 0) return false;
      let lastItemPeek = stack.pop();
      if (hashMap[lastItemPeek] !== string[i]) return false;
    }
  }

  return stack.length === 0;
}
