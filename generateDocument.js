//sort Each of the strings
//loop through the document and match it against the characters
//if they are not equal return false
//if entire loop runs return true
//O(nlogn) time => sorting
//O(1) space, (sorting in place)
//need to be wary of special characters
function generateDocument(characters, document) {
  // characters = characters.split(' ')
  // characters = characters.split('').sort()
  characters = characters.split("").sort().join("");
  document = document.split("").sort().join("");

  let docCount = 0;
  for (let i = 0; i < characters.length; i++) {
    if (document[docCount] === characters[i]) {
      docCount++;
    }
  }
  if (docCount === document.length) return true;

  return false;
}


