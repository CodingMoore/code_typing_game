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

/* From pressupinc.com/blog/.... 

The jQuery function below takes a selector as an argument, and splits the contents of all matching elements into individual, one-character <span> elements. The function then replaces the original string with a string of these one-character <span>s.

Each single-character <span> has two classes: single-char AND char-i (where i is the character’s position in the original string).

function arrayMe(string) {

	// For all matching elements
	$(string).each(function() {

		// Get contents of string
		var myStr = $(this).html();

		// Split myStr into an array of characters
		myStr = myStr.split("");

		// Build an html string of characters wrapped in  tags with classes
		var myContents = "";
		for (var i = 0, len = myStr.length; i < len; i++) {
			myContents += '<span class="single-char char-' + i + '">' + myStr[i] + '</span>';
		}

		// Replace original string with constructed html string
		$(this).html(myContents);
	});
}

// Calling arrayMe on page load, on class "sample-text"
$('document').ready(function() {
	var myStringType = $('.sample-text');
	arrayMe(myStringType);
});

*/

export function validater(input, checker) {
  // this will be passed and called as a callback function any time the input field is changed by user
  // input and checker are expected to be each typeof "string"
  // change each string passed-in as "input" and "checker" into arrays:
  let inputAsArray = input.split("");
  let checkerAsArray = checker.split("");
  let colorizedContents = "";
  for (let i = 0; i < inputAsArray.length; i++) {
    if (inputAsArray[i] !== checkerAsArray[i]) {
      // console.log("invalid element detected");
      // wrap each array element in span tags with class: .single-char and .incorrect
      colorizedContents += `<span class="single-char incorrect">${inputAsArray[i]}</span>`;
    } else {
      colorizedContents += `<span class="single-char correct">${inputAsArray[i]}</span>`;
      // console.log("validated");
    }
  }
  // now the for loop has run: return the html-ized string
  return colorizedContents;
}

// export function splitter() {
//   let userInputArray = [];
//   $("#inputField").on("input", THIS CALLBACK FUNCTION NEEDS TO BE A SPLITTER AND VALIDATER function() {
//     userInputArray.push($("#inputField").val());
//     let splitInput = userInputArray.join(""); // splitInput is now typeof:
//     let splitChecker = this.prompt1.join(""); // splitChecker is now typeof:
//     console.log(splitInput);
//     console.log(splitChecker);
//     let splitArray = splitInput.split(""); // splitArray is now typeof:
//     let splitCheckerArray = splitChecker.split(""); // splitCheckerArray " " typeof: Array (true)
//     console.log(splitArray);
//     console.log(splitCheckerArray);
//     validater(splitArray, splitCheckerArray);
//     userInputArray.pop();
//     console.log(userInputArray);
//   });
// }


// validate?
// modify userInputArray with red character
// $("#target").val(userInputArray);

// document.getElementById('fn').style.color = 'Red';
