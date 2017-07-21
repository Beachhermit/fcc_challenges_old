// code submitted for challenge, but with cleaned up comments

function chunkArrayInGroups(arr, size) {
  // splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
  var tempArr = [];
  var newArr = [];
  
  while (arr.length > 0) {              // while there are still values in arr
    tempArr = arr.slice(0, size);       // make a temp array of first (size) elements of arr
    newArr.push(tempArr);               // push the temp array onto result array
    for (var i = 0; i < size; i++) {
      arr.shift();                      // then shift (size) values off the start of arr
    }
  }
  
  /*while (arr.length > 0) {            // Here I tried to shift values off one array and push them onto the other
                                        // but for some reason it resulted in an infinite loop which kept running
    for (var i = 0; i < size; i++) {    // after successfully passing all the tests
      tempArr.push(arr.shift);
    }
  newArr.push(tempArr);
  }*/
  
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
