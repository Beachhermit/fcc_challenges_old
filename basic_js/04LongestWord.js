// code submitted for challenge, but with cleaned up comments
function findLongestWord(str) { //takes a string, returns number of letters in the longest word in the string
  
  var splitStr = str.split(" ");            // turn string into array of words
  var longest = 0;                          //set comparison variable
  
  for (var item in splitStr) {              //for each item in the array

    if (splitStr[item].length > longest) {  //check its length against longest
      longest = splitStr[item].length;      //and replace if true
    }
    
  }
  
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

//testing code
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));
