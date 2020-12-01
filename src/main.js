import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Complete } from './js/mode-complete.js';


$(document).ready(function() {
  let game = new Complete();
  $("#promptOut").text(game.prompt1[0]);
  $("#progress").text(`1/${game.prompt1.length}`);
  $("form").submit(function(event) {
    event.preventDefault();
    
    game.userInput.push($("#inputField").val());
    let progress = `${(game.turnsTaken) +2} / ${game.prompt1.length}`;
    $("#progress").text(progress);
    if (game.checkAnswer() === "correct") {
      $("#correct").show();
      $("#inputField").val("");
      setTimeout(function() {
        $("#correct").hide();
        $("#promptOut").text(game.prompt1[game.turnsTaken]);
      } , 1000);
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

//Object.keys.length(game.prompt1