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
            document.addEventListener("mouseenter", lightStars);
      }
      // Add an event listener to update specified function when requirements are met
      document.addEventListener("keyup", updateCount);
}

// Creating a function to color the the amount of stars that the users mouse hovers over
function lightStars(e) {
      // Setting star ratings values under specific variable
      var starNumber = e.target.alt;
      stars
}

  


  
  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   