$(document).ready(function(event){
  $("#pingPong").submit(function(event){
    var userInput = parseInt($("#userInput").val());
    $("#result").text(userInput);
    event.preventDefault();


  });
});
