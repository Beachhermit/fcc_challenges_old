$(document).ready(function() {
  
  $("#getQuote").on("click", function(){
    
    $.getJSON("https://cors-anywhere.herokuapp.com/" +
    "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {

      let quote = JSON.stringify(json.quoteText);
      let author = JSON.stringify(json.quoteAuthor);
      $("#quoteText").html(quote);
      if (author != "") {
        $("#authorText").html(author);
      }
      else {
        $("#authorText").html("Anonymous");
      }
      
    });

  });
  
});