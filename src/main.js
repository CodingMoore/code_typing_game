import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Complete } from './js/mode-complete.js';

// function setTimeout(onSubmit, 3000) {
//     onSubmit.disabled = true;
//     $(".gameOver").show();
//   }, 3000);
// }


$(document).ready(function() {
  function Timer() {
    setTimeout(function() {
      $(".gameOver").show();
      $(".card-header").html("<span>" + "Score" + "</span>")
    }, 3000);
  }
  
  $("#gamestart").click(function() {
    // $("#one").show();
    $("#promptOut").css("filter","blur(0)");
    Timer();
  });

  let game = new Complete();
  $("#promptOut").text(game.prompt1[0]); 
  $("#add").submit(function(event) {
    event.preventDefault();
    game.userInput.push($("#inputField").val());
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
  $("#promptForm").submit(function(e) {
    e.preventDefault();
    game.addPrompt($("#userPrompt").val());
    let arr = game.prompt1;
    console.log(arr);
    makeTable(arr);
    $("#userPrompt").val("");

  });
  function makeTable(arr) {
    $('.newPrompts').text("");
    for (var key in arr) {
      $('.newPrompts').append('<tr><td>' + arr[key] + '</td></tr>');
    }
  }
});
