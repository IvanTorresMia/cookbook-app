/*
Ivan's notes: 
I made inputs and buttons and stored the hooks in variables. 
What this does thus far, is just console.log values just to make sure that we are getting values
Then I made a class in our stylesheet of 'hide' that allows containers to hide or show when a button is clicked 
i.e when you click the startButton, then the start container will hide and show the next container up. 

Here is were our ajax call magic will happen
*/



$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

var startButton = $("#add");
var ingridientButton = $("#add-ingridient");
var viewAllButton = $("#view-all")
var doneButton = $("#done-button")
var ingridientContainer = $("#ingridient-container");
var startContainer = $("#start-container")
var endContainer = $("#end-container");
var recipieName = $(".recipie-input");
var ingridientInput = $(".ingridient-input");
var instructionInput = $("#add-instruction");




  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });



  $(startButton).on("click", function(event) {
    event.preventDefault();
   console.log(recipieName.val())

   ingridientContainer.attr("class", "none");
   endContainer.attr("class", "hide");
   startContainer.attr("class", "hide");


  })

  $(ingridientButton).on("click", function(event) {
    event.preventDefault();
  console.log(ingridientInput.val())
console.log(instructionInput.val())



  })

$(doneButton).on("click", function(event){
  event.preventDefault();
  ingridientContainer.attr("class", "hide");
  endContainer.attr("class", "none");
  startContainer.attr("class", "hide");

})

});

