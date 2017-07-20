// code submitted for challenge
function reverseString(str) {
  
  str = str.split('').reverse().join('');
  return str;
}

reverseString("hello")

// testing code
console.log(reverseString("hello"));
console.log(reverseString("Greetings from Earth"));