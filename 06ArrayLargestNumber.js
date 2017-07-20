// code submitted for challenge, but with cleaned up comments
function largestOfFour(arr) {
    //designed to take an array made up of 4 sub-arrays each with 4 numbers, but should work with other sizes
    //returns an array with the largest number from each sub-array.
  
  var largestArr = [];                  //initialise array to save largest values
  for (var item in arr) {               //for each sub-array
    var largest = 0;                    //assume current largest is zero
    
    for (var num in arr[item]) {        //then for each number in sub-array
      if (arr[item][num] > largest) {   //check if number is larger than current largest
        largest = arr[item][num];       //if true, change current largest to reflect discovery
      }
      largestArr[item] = largest;       //at end of sub-array, add current largest to recording array
    }
  }

  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//testing code
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));