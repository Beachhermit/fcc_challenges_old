// code submitted for challenge, but with cleaned up comments
function confirmEnding(str, target) {
    //takes a string and a target; returns boolean indicating whether target is at the end of the string
    //restriction: do not use endswith()
  return str.substr(-target.length) == target;
}

confirmEnding("Bastian", "n");

//testing code
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));