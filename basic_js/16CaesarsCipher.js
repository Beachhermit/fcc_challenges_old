
function rot13(str) { // LBH QVQ VG!
  //takes a ROT13 encoded string (cycled 13 places) as input and returns a decoded string. 
  //All letters will be uppercase. Do not transform any non-alphabetic character 
  //(i.e. spaces, punctuation), but do pass them on.
  var uncodedCode = [];
  
  for (var item in str) {
      if (str.charCodeAt(item) >= 65 && str.charCodeAt(item) <= 90) {   // if char between 'A' and 'Z'
        uncodedCode[item] = str.charCodeAt(item)-13;                    // subtract 13 places
        if (uncodedCode[item] < 65) {                                   // if that puts it lower than 'A'
            uncodedCode[item] += 26;                                    // add 26 places
        }
      }    
      else {
          uncodedCode[item] = str.charCodeAt(item);                     // if char outside 'A' to 'Z', pass char unchanged
      }
  }
  
  var uncoded = String.fromCharCode.apply(this, uncodedCode);           // turn the resulting array back into a string
  return uncoded;
}

//testing code
console.log(rot13("SERR PBQR PNZC")); // should decode to "FREE CODE CAMP"
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")); // should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
console.log(rot13("LBH QVQ VG!"));

//String.fromCharCode.apply(this, array) - code picked up from stackexchange