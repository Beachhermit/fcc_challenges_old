// code submitted for challenge, but with cleaned up comments
function truncateString(str, num) {
  // takes a string and a number; returns same string truncated after the number of characters, with an ellipsis on the end
  // ellipsis is counted in returned string length, only if returned string length > 3
  if (str.length > num && num <= 3) {
  return str.slice(0, num) + "...";
  }
  
  else if (str.length > num) {
    return str.slice(0, num-3) + "...";
  }
  
  else {
  return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
