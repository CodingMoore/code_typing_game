import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Complete } from './js/mode-complete.js';
import { validater } from './js/validate-char.js';
// 

$(document).ready(function() {
  let game = new Complete();
  let currentPrompt = $("#promptOut").text(game.prompt1[0]);
  
  // jquery event listener for any kind of change to the user input, calls the validater function:
  $('#userInput').on("input", validater($("#inputField").val(), currentPrompt));
  $("form").submit(function(event) {
    event.preventDefault();
    game.userInput.push($("#inputField").val());
    if (game.checkAnswer() === "correct") {
      $("#correct").show();
      $("#inputField").val("");
      setTimeout(function() {
        $("#correct").hide();
        currentPrompt = $("#promptOut").text(game.prompt1[game.turnsTaken]);
      } , 1000);
      return currentPrompt;
    } else {
      $("#incorrect").show();
      $("#inputField").val("");
      game.userInput.pop();
      setTimeout(function() {
        $("#incorrect").hide();
      } , 1000);
    }

  });
});