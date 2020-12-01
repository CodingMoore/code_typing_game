// Overall: this business logic should:
/*
on the fly
check user input against expected input ('prompt')

Examples:

Prompt: the
Input: th

No color changes yet (unless we want to change correctly typed chars to a green/success-y color)

Prompt: the
Input: thv

NOW: that last v will show up as a red v (or as a bolded, red v, even)

*/

export function validater(input, checker) {
  // this will be passed and called as a callback function any time the input field is changed by user
  // input will very likely come in as typeof "string"
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== checker[i]) {
      input[i].addClass("incorrect");
    } else {
      input[i].removeClass("incorrect");
    }
  }
}
// userInputArray = [];
// $("#userInput").on("input", push to userInputArray
// validate?
// modify userInputArray with red character
// $("#target").val(userInputArray);