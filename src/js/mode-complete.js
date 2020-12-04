export class Complete {
  constructor() {
    this.time = {
      seconds:0,
      minutes:0,
    };
    this.userInput = [];
    this.wrongAnswer = [];
    this.prompt = [
      [ // "Warm-up" (index: 0)
        "[",
        "{",
        "<",
        "/",
        "="
      ],
      [ // "Miscellaneous" (index: 1)
        "function() {",
        "Array.prototype",
        "thisArray.push",
        "setTimeout(function(){},5000)",
        "return result"
      ],
      [ // "Lots o' symbols 'n' brackets" (index: 2)
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
        "` backticks! `,",
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
        "${evaluated}",
      ],
      [ // "Functions, callbacks, dot notation" (index: 3)
        "function()",
        "function",
        "higher order function(callback(parameter) {const wizardry;}, callbackSecond() {})",
        "this.here[i]",
        "VeryNested.Object.keys.instance.locator",
        "Some[more]bracket.and.dot[notation]",
        "arrayOfEverything.subArray.difficulty.zero.7",
        "function(el) { el => el * 2 };",
        "function(with, two, or, more, arguments) {this.name = with};",
        "function haberdasher() {const hat; return hat;}",
        "function(callback(firstArgument) {const code;}, secondArgument)",
        "callback",
        "(){}",
        "function Constructionist(name, partyAffiliation){this.name = name; this.partyAffiliation = chattyParty}"
      ],
      [ // "Emmet abbreviations and html" (index: 4)
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
        "div.container>div.jumbotron>h1+p.subtitle",
        "div.container>div*2>ul>5*li"
      ],
      [ // "Ampersandstravaganza" (index: 5)
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
        "&trade;"
      ],
      [ // "FratMode" (index: 6)
        "&alpha;",
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
        "&Omega;"
      ],
      [ // "JavaScript keywords: all" (index: 7)
        "break",
        "case",
        "catch",
        "class",
        "export",
        "extends",
        "finally",
        "super",
        "switch",
        "try",
        "const",
        "continue",
        "debugger",
        "default",
        "return",
        "new",
        "instanceof",
        "function",
        "for",
        "in",
        "yield",
        "with",
        "while",
        "void",
        "var [not best practice!]",
        "else",
        "do",
        "delete",
        "if",
        "import",
        "enum", // <-- begin "Future reserved keywords"
        "implements",
        "package",
        "public",
        "interface",
        "private",
        "static",
        "let",
        "protected",
        "await",
        "null"
      ],
      [ // "Escape sequences" (index: 8)
        "\\n",
        "\\r",
        "\\t"
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
    this.time = {
      seconds:0,
      minutes:0,
    };
    this.turnsTaken = 1;
    this.userInput = [];
    this.wrongAnswer = [];
    // this.prompt = [[
    //   "[",
    //   "{",
    //   "<",
    //   "/",
    //   "="
    // ],
    // [
    //   "function() {",
    //   "Array.prototype",
    //   "thisArray.push",
    //   "setTimeout(function(){},5000)",
    //   "return result"
    // ]];
  }
}