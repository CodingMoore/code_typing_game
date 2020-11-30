export class Complete {
  constructor() {
    this.userInput = [];
    this.prompt1 = [
      "[",
      "{",
      "<",
      "/",
      "="
    ];
    this.turnsTaken = 0;
  }
  checkAnswer() {
    let count = this.turnsTaken;
    if (this.userInput[count] === this.prompt1[count]) {
      this.turnsTaken ++;
      return "correct";
    } else {
      return "incorrect";
    // add one to the number of turnsTaken:
    }
  }
}

