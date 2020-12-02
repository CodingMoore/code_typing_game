import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Complete } from './js/mode-complete.js';
import { validater } from './js/validate-char.js';

$(document).ready(function() {
  let game = new Complete();
  $("#promptOut").text(game.prompt1[0]);
  $("#progress").text(`1/${game.prompt1.length}`);
  $("#inputField").on("input", function() {
    $("#visual").html(validater($("#inputField").val(), game.prompt1[game.turnsTaken], game));
  });
  $("#input").submit(function(event) {
    event.preventDefault();
    let progress = `${(game.turnsTaken) +2} / ${game.prompt1.length}`;
    $("#progress").text(progress);
    game.userInput.push($("#inputField").val());
    if (game.checkAnswer() === "correct") {
      $("#correct").show();
      $("#inputField").val("");
      setTimeout(function() {
        $("#correct").hide();
        $("#promptOut").text(game.prompt1[game.turnsTaken]);
        $("#visual").html("");
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
  function makeTable(arr) {
    $('.newPrompts').text("");
    for (let key in arr) {
      $('.newPrompts').append('<tr><td>' + arr[key] + '</td></tr>');
    }
  }
  function Timer() {
    setTimeout(function() {
      $(".modal").show();
      $(".card-header").html("<span>" + "Score" + "</span>");
    }, 3000);
  }

  $(".close").click(function() {
    $(".modal").css("display", "none");
  });

  $("#gamestart").click(function() {
    $("#promptOut").css("filter","blur(0)");
    Timer();
  });

  $("#promptForm").submit(function(e) {
    e.preventDefault();
    game.addPrompt($("#userPrompt").val());
    let arr = game.prompt1;
    makeTable(arr);
    $("#userPrompt").val("");
  });

  $("#gamestart").click(function() {
    $("#promptOut").css("filter","blur(0)");
    Timer();
  });
})
