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
  return colorizedContents + "<span class='blinker'>|</span>";
}
