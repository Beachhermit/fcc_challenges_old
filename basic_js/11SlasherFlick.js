// code submitted for challenge, but with cleaned up comments

function slasher(arr, howMany) {
  // Returns the remaining elements of an array after chopping off (howMany) elements from the beginning of the array
  arr.splice(0, howMany);
  
  return arr;
}

slasher([1, 2, 3], 2);
