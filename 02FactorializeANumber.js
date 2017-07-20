// code submitted for challenge
function factorialize(num) { //takes an integer(num), returns 1*2*3...*num
  
  if (num <= 1) {
    return 1;
  }
  else {
    return num * factorialize(num-1);
  }
}

factorialize(5);