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
var ingredientButton = $("#add-ingredient");
var viewAllButton = $("#view-all")
var doneButton = $("#done-button")
var ingredientContainer = $("#ingredient-container");
var startContainer = $("#start-container")
var endContainer = $("#end-container");
var recipeName = $(".recipe-input");
var ingredientInput = $(".ingredient-input");
var instructionInput = $("#add-instruction");
var addAnother = $("#add-another");
var vewAllButton = $("#view-all");




  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });



  $(startButton).on("click", function(event) {
    event.preventDefault();
   console.log(recipeName.val());

   ingredientContainer.attr("class", "none");
   endContainer.attr("class", "hide");
   startContainer.attr("class", "hide");

  //  Making a call to post. 
   $.get("/api/user_data").then(function(data) {
console.log(data.id)
// This is to get user Id and pass it to the UserId foreign Key
    var userId = data.id
    $.post("/api/recipe", {title: recipeName.val(), id: userId}
   
   )
  });


  })

  $(ingredientButton).on("click", function(event) {
    event.preventDefault();
  console.log(ingredientInput.val())
  console.log(instructionInput.val())
  var recipeArr = [];
  // Making a call to post 
$.get("/api/recipe", function(data) {
  var recipeId = data.length;

  console.log(data.length)

  $.post("/api/ingredients", {title: ingredientInput.val(),body: instructionInput.val(), id: recipeId})

  });
});


$(doneButton).on("click", function(event){
  event.preventDefault();
  ingredientContainer.attr("class", "hide");
  endContainer.attr("class", "none");
  startContainer.attr("class", "hide");

})

$(addAnother).on("click", function(event) {
  event.preventDefault();

  ingredientContainer.attr("class", "hide");
  endContainer.attr("class", "hide");
  startContainer.attr("class", "mone");




})

$(viewAllButton).on("click", function(event){
  event.preventDefault();

  window.location.href = "/viewAll";
})

});

