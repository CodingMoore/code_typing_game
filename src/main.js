import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Complete } from './js/mode-complete.js';
import { validater } from './js/validate-char.js';

function blink_text() {
  $(".blinker").fadeOut(150);
  $(".blinker").fadeIn(300);
}
setInterval(blink_text, 1500);

function textFocus() {
  $("#inputField").focus();
}

$(document).ready(function() { 
  $("#radio-form").focus();
  $("#start").show();
  $('#radio').submit(function(event) {
    setInterval(textFocus, 100);
    event.preventDefault();
    let difficulty = $('input:radio[name=diff]:checked').val();
    let game = new Complete;
    game = Complete.newGameInstance(0);
    gameStart(game, difficulty);
  });
  function gameStart(game, difficulty) {
    $('#seconds').html(`${game.time.minutes}:${game.time.seconds}`);
    Timer();
    $("#visual").html("<span class='blinker'>|</span>");
    $("#inputField").val("");
    $("#start").hide();
    $("#promptOut").html(game.prompt[difficulty][0] + "<span class='blankSpace'>|</span");
    $("#progress").text(`1/${game.prompt[difficulty].length}`);
    
    $("#inputField").on("input", function() {
      
      $("#visual").html(validater($("#inputField").val(), game.prompt[difficulty][game.turnsTaken -1]));
    });
    $("#input").submit(function(event) {
      event.preventDefault();
      game.userInput.push($("#inputField").val());
      if (game.checkAnswer(difficulty) === "correct") {
        game.turnsTaken ++;
        if (game.turnsTaken <= game.prompt[difficulty].length) {
          $("#progress").css("background-color", "green");
          $("#inputField").val("");
          $("#promptOut").html(game.prompt[difficulty][game.turnsTaken - 1] + "<span class='blankSpace'>|</span");
          $("#progress").text((game.turnsTaken) + "/" + game.prompt[difficulty].length);
          $("#visual").html("<span class='blinker'>|</span>");
          setTimeout(function() {
            $("#progress").css("background-color", "transparent");
          } , 200);
        } else {
          let score = showScore();
          $('#gameScore').html(`<span>${score}</span>`);
          game.resetPlayer();
          $('#gameOver').show();
        }
      } else if (game.checkAnswer(difficulty) === 'incorrect') {
        $("#progress").css("background-color", "red");
        game.wrongAnswer.push(game.userInput);
        game.userInput.pop();
        setTimeout(function() {
          $("#progress").css("background-color", "transparent");
        } , 200);
      }
    });
    $("#promptForm").submit(function(e) {
      e.preventDefault();
      game.addPrompt($("#userPrompt").val(), difficulty);
      $('#progress').text((game.turnsTaken) + "/" + game.prompt[difficulty].length);
      $("#userPrompt").val("");
    });
    function Timer() {
      let timer = setInterval(function() {
        game.time.seconds ++;
        $('#seconds').html(`${game.time.minutes}:${game.time.seconds}`);
        if (game.time.seconds === 60) {
          game.time.minutes ++;
          $('#seconds').html(`${game.time.minutes}:${game.time.seconds}`);
          game.time.seconds = 0;
          clearInterval(timer);
          Timer();
        }
      }, 1000);
    }

    function showScore() {
      let num = 0;
      for (let i = 0; i < game.prompt[difficulty].length; i++) {
        num += game.prompt[difficulty][i].length;
      }
      let score =  Math.floor(num / (game.time.minutes + (game.time.seconds / 60))) + " Characters / minute";
      return score;
    }
  }
});