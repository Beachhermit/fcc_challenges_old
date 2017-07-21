// code submitted for challenge, but with cleaned up comments
function repeatStringNumTimes(str, num) {
  // takes a string and a number, returns the string repeated the number of times, or empty string if number not positive
  if (num <= 0) {
    return "";
  }
  else {
  return str.repeat(num);
  }
}

repeatStringNumTimes("abc", 3);
