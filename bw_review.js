"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Mackenzie Baker
   Date:   3.13.2019
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/

// Runs the init function when the page is first loaded
window.onload = init; 

// Creating the init function
function init() {
      // Storing all of the star reviews
      var stars = document.querySelectorAll("span#stars img");
      // Create a for loop to loop through the different star images
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }
      // Add an event listener to update specified function when requirements are met
      document.getElementById("comment").addEventListener("keyup", updateCount);
}

// Creating a function to color the the amount of stars that the users mouse hovers over
function lightStars(e) {
      // Setting star ratings values under specific variable
      var starNumber = e.target.alt;
      // Storing all of the star reviews
      var stars = document.querySelectorAll("span#stars img");
      // Creating a loop for the stars to light up each star depending on the users mouse
      for(var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }
      // Creating a loop for the stars to unlight each star depending on the users mouse
      for(var i = starNumber; i < 5; i++) {
            star[i].src = "bw_star.png";
      }
      // Changing the value of the stars based upon how many are highlighted
      document.getElementById("rating").value = starNumber + "stars";
      e.target.addEventListener("mouseleave", turnOffStars);
      e.target.addEventListener("click", 
      function () {
            e.target.removeEventListener("mouseleave", turnOffStars)
      });
}

// Create the turnOffStars function that unlights the stars when they arent hovered over
function turnOffStars(e) {
      // Storing all of the star reviews
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      document.getElementById("rating").value = "";
} 

// Create the updateCount function to total the number of characters typed by user into text area box
function updateCount() {
      // Refernces the value stored within the text area box
      var commentText = document.getElementById("comment").value;
      // Declares the commentText variable as the parameters in the variable labeled charCount
      var charCount = countCharacters(commentText);
      // References the wordCount text area box
      var wordCount = document.getElementById("wordCount");
      // Changing the value of wordCount to a specified value
      wordCount.value = charCount + "/1000";
      // If else statement for different scenarios
      if (charCount > 1000) {
            wordCount.style.color = "white";
            wordCount.style.backgroundColor = "red";
      } else {
            wordCount.style.color = "black";
            wordCount.style.backgroundColor = "white";
      }
}

  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   