import { timers } from "jquery";

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