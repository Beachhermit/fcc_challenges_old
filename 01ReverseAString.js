// code submitted for challenge
function reverseString(str) { //takes string as input, returns string in reverse
  
  str = str.split('').reverse().join('');
  return str;
}

reverseString("hello")

// testing code
console.log(reverseString("hello"));
console.log(reverseString("Greetings from Earth"));