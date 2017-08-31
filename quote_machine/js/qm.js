jQuery(document).ready(function() {
  
      jQuery("#getQuote").on("click", function(){
        // Only change code below this line.
        
        jQuery.getJSON("https://cors-anywhere.herokuapp.com/" +
        "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
    jQuery("#quoteText").html(JSON.stringify(json.quoteText));
    jQuery("#authorText").html(JSON.stringify(json.quoteAuthor));
  });
        
        // Only change code above this line.
      });
  
    });