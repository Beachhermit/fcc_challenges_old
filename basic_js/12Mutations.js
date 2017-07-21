// code submitted for challenge, but with cleaned up comments
function mutation(arr) {
  // Returns true if the string in the first element of the array contains all of the letters 
  // of the string in the second element of the array, regardless of position or case
  var lc0 = arr[0].toLowerCase();   // change both strings to lower case
  var lc1 = arr[1].toLowerCase();
  
  for (var letter in lc1) {
    if (lc0.indexOf(lc1[letter]) == -1) {   // search for each letter of second string in first string
      return false;
    }
  }
  
  return true; // if program gets here, that means all letters were found
}

mutation(["hello", "hey"]);
