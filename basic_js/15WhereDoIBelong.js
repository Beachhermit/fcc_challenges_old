
function getIndexToIns(arr, num) {
  // sorts array, then returns index where num should go
  arr.sort(function(a, b) {
    if (a < b) {
      return -1;
    }
    else {
      return 1;
    }
  });
  
  for (var i = arr.length - 1; i >=0; i--) {    // starting from end of array
    if (num > arr[i]) {                         // if num > current element
      return i + 1;                             // return next highest index number
    }
  }
  
  return 0; //if num has been checked against whole array and no lesser numbers found
}

getIndexToIns([40, 60], 50);

//testing code
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); //should return 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); //should return 2
console.log(getIndexToIns([40, 60], 50)); //should return 1

//OMG yay! This is the first one I've actually done here. This file caused me
//to look for somewhere else to construct these challenges. Using the debugger
//I found a typo that was causing the error (had i+i instead of i+1 - hard to see!)
