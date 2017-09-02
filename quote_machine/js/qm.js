$(document).ready(function() {
  
  $("#getQuote").on("click", function(){
    
    $.getJSON("https://cors-anywhere.herokuapp.com/" +
    "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {

      let quote = '"' + json.quoteText + '"';
      let author = json.quoteAuthor || "Anonymous";
      $("#quoteText").html(quote);
      $("#authorText").html(author);
            
    });

  });
  
});