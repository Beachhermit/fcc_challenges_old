// code submitted for challenge, but with cleaned up comments
function palindrome(str) {
  //takes a string, returns boolean indicating whether string is a palindrome once non-alpha chars have been deleted

  // Use regex to replace anything that's not a 'word' character (excepting underscore) with empty string
  var culledStr = str.replace(/[\W]|_/g, ''); 
  var lowerCulled = culledStr.toLowerCase();    //create a copy of culled string in all lower case
  var revLowCull = '';                          // initialise reverse string variable
  
  
  
  for (var i = lowerCulled.length - 1; i >= 0; i--) { //working backwards from end of string, 
    revLowCull += lowerCulled[i];                     //add each character to the new string.
    
  }

  return revLowCull == lowerCulled; //return test for equality
}

palindrome("eye");

//testing code

console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));