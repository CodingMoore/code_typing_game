// import { Complete } from "./mode-complete.js";

export function validater(input, checker) {
  let inputAsArray = input.split("");
  let checkerAsArray = checker.split("");
  let colorizedContents = "";
  for (let i = 0; i < inputAsArray.length; i++) {
    if (inputAsArray[i] !== checkerAsArray[i]) {
      colorizedContents += `<span class="single-char incorrect">${inputAsArray[i]}</span>`;
    } else {
      colorizedContents += `<span class="single-char correct">${inputAsArray[i]}</span>`;
    }
  }
  return colorizedContents;
}
// let holder;
// function newGame() {
//   for (let i = 0; i < 10; i++) {
//   holder = "game" + i 
//   return eval(holder) // What is this line doing? 
  
//   }
// }
// newGame();