// code submitted for challenge, but with cleaned up comments

function destroyer(arr) {
  // input array consists of an array and additional arguments to be removed from array
  
  // setup array variables
  var firstArg = arguments[0];  // holds the array
  var tempArr = [];             // this will contain the non-array arguments
  var cleaned = [];             // this will hold the array after arguments deleted
  
  for (var i = 1; i < arguments.length; i++) {  // for each argument after the first
    tempArr.push(arguments[i]);                 // store that value in tempArr
  }
  
  for (i = 0; i < firstArg.length; i++) {       //for each item in firstArg
    if (tempArr.indexOf(firstArg[i]) == -1) {   //if that item is not in tempArr
      cleaned.push(firstArg[i]);                // push that value onto the cleaned array
    }
  }
  
  return cleaned;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
