export class Complete {
  constructor() {
    this.userInput = [];
    this.prompt = [
      [
        "[",
        "{",
        "<",
        "/",
        "="
      ],
      [
        "function() {",
        "Array.prototype",
        "thisArray.push",
        "setTimeout(function(){},5000)",
        "return result"
      ],
      [
        "[",
        "{",
        "<",
        "/",
        "=",
        ">",
        "]",
        ",",
        "@keys,",
        "%",
        "!",
        "` some text `,",
        "~",
        "*",
        "&emdash;",
        "{}",
        "[]",
        "()",
        "$",
        "$()",
        "$(' ')",
        "${}",
        "function()",
        "function",
        "this.here",
        "VeryNested.Object.keys.instance.locator",
        "Some[more]bracket.and.dot[notation]",
        "<>",
        "()",
        "^",
        "#",
        "@",
        "@mailto:",
        "class",
        "id",
        "div.class-name-here",
        "div#id-name-here",
        "div>p+ul>5*li",
        "div>h2+3*p",
        "div>h3+p+ul>6*li",
        "&amp;", // <-- Begin html named codes section
        "&bull;",
        "&deg;",
        "&sdot;",
        "&infin;",
        "&mdash;",
        "&euro;",
        "&pound;",
        "&yen;",
        "&cent;",
        "&copy;",
        "&reg;",
        "&trade;",
        "&alpha;", // <-- Begin greek
        "&beta;",
        "&gamma;",
        "&lambda;",
        "&omicron;",
        "&Alpha;",
        "&Beta;",
        "&Gamma;",
        "&Delta;",
        "&Omicron;",
        "&Pi;",
        "&Upsilon;",
        "&Chi;",
        "&Psi;",
        "&Omega;",
      ]
  
  ];
    this.turnsTaken = 1;
  }
  checkAnswer(difficulty) {
    let count = this.turnsTaken;
    if (this.userInput[count-1] === this.prompt[difficulty][count-1]) {
      return "correct";
    } else {
      return "incorrect";
    }
  }
  addPrompt(input, difficulty) {
    this.prompt[difficulty].push(input);
  }
  static newGameInstance(gamesPlayed) { // gamesPlayed is a number
    let counter = gamesPlayed++;
    let newInstance = new Complete();
    // change the name or some other key-value on this new instance to signify it is game 2 or game 3, and so on...
    newInstance.gamesPlayed = counter;
    return newInstance;
  }
  resetPlayer() {
    this.turnsTaken = 1;
    this.userInput = [];
    this.prompt = [[
      "[",
      "{",
      "<",
      "/",
      "="
    ],
    [
      "function() {",
      "Array.prototype",
      "thisArray.push",
      "setTimeout(function(){},5000)",
      "return result"
    ]];
  }
  addPrompt(input) {
    this.prompt1.push(input);
  }
}

/*
promptArray["this", "is", "an", "example"]
display promptArary[i],
newArray.push.(promptArray[i])
newArray...["t","h","i","s"]

$().text(newArray[0] + newArray[1] + newArray[2])

1) time trial - patrick Nick
2) add highlight incorrect - Tyler Randel
3) percent correct
4) chars per/min
5) show question 2 out of 10
6) add additional prompt arrays
7) way to select prompt array


game mode) fill in the blank

*/