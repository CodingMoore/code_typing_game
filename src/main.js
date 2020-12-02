import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Complete } from './js/mode-complete.js';
import { validater } from './js/validate-char.js';

$(document).ready(function() { 
  $(".modal").show();
  $('#radio').submit(function(event) {
    event.preventDefault();
    let difficulty = $('input:radio[name=diff]:checked').value();
    let game = new Complete();
    gameStart(game, difficulty);
    
  });
  function gameStart(game, difficulty) {
    $("#promptOut").text(game.prompt[difficulty][0]);
    $("#progress").text(`1/${game.prompt[difficulty].length}`);
    $("#inputField").on("input", function() {
      $("#visual").html(validater($("#inputField").val(), game.prompt[difficulty][game.turnsTaken - 1]));
      console.log(game.turnsTaken);
    });
    $("#input").submit(function(event) {
      event.preventDefault();
      game.userInput.push($("#inputField").val());
      if (game.checkAnswer(difficulty) === "correct") {
        game.turnsTaken ++;
        $("#correct").show();
        $("#inputField").val("");
        setTimeout(function() {
          $("#correct").hide();
          $("#promptOut").text(game.prompt[difficulty][game.turnsTaken - 1]);
          $("#progress").text((game.turnsTaken) + "/" + game.prompt[difficulty].length);
          $("#visual").html("");
        } , 1000);
      } else {
        $("#incorrect").show();
        $("#inputField").val("");
        game.userInput.pop();
        setTimeout(function() {
          $("#incorrect").hide();
          $("#visual").html("");
        } , 1000);
      }
    });
    $("#promptForm").submit(function(e) {
      e.preventDefault();
      game.addPrompt($("#userPrompt").val(), difficulty);
      $("#userPrompt").val("");
    });
  }
  function Timer() {
    setTimeout(function() {
    }, 3000);
  }


  $("#gamestart").click(function() {
    $("#promptOut").css("filter","blur(0)");
    Timer();
  });
});

