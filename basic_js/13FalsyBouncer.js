// code submitted for challenge, but with cleaned up comments
function bouncer(arr) {
  // Removes all falsy values from an array: false, null, 0, "", undefined, and NaN.
  
  var unbounced = arr.filter(function(test){
    
    if (test == false ||
        test == null ||
        test == 0 ||
        test == "" ||
        test == undefined ||
        Number.isNaN(test)) {   //this bit was very tricky: NaN doesn't work like the rest
      return false;
    }
    else {
      return true;
    }
  });
  
  return unbounced;
}

bouncer([7, "ate", "", false, 9]);
