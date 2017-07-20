// code submitted for challenge, but with cleaned up comments
function titleCase(str) {
    //takes a string, returns string with first letter of each word in uppercase and the rest in lowercase
  
  var splitStr = str.split(" ");    //convert string to array of words
  var newStrArr = [];               //initialise array to hold processed words
  
  for (var item in splitStr) {                          //for each item in the array
    var tempStr = "";
    tempStr += splitStr[item][0].toUpperCase();         //make a string beginning with uppercase copy of first letter
    for (var i = 1; i < splitStr[item].length; i++) {   //then, for every letter after the first
      tempStr += splitStr[item][i].toLowerCase();       //add lowercase copy to string 
    }
    newStrArr[item] = tempStr;                          //add string as an item to new array
  }
  var resultStr = newStrArr.join(" ");                  //and join the resulting array back into a string
  
  return resultStr;
}

titleCase("I'm a little tea pot");

// testing code
console.log(titleCase("sHoRt AnD sToUt"))
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));