# **code_typing_game**
Begun: 2020-11-30.
Most Recent Updates: 2020-12-03.
Creators: Nick Hennessy <njhnny@gmail.com>, Patrick Osten <posten.coding@gmail.com>, Randel Moore <RMGit.it@gmail.com>, Tyler Sinks <tyler.sinks@gmail.com>
## **Project Description**
Want to type all those weird characters and coding-required brackets with greater speed and accuracy? This project has gameified this. Pit you and your keyboard skills against a timer.
#### On screen, the features you will see:
|        prompt       |              input              |                  progress                  |            timer            |
|:-------------------:|:-------------------------------:|:------------------------------------------:|:---------------------------:|
| your current prompt | **colorized** input as you type | progress through the selected prompt genre | minutes and seconds elapsed |
## **Required for Use**
1. A web browser capable of HTML5
2. A keyboard / text-entry device
## **Installation Instructions**
**Option 1** (download zip file)
1) Copy and paste the following GitHub project link into your web browser's url bar and hit enter/return. https://github.com/RMGit-it/code_typing_game
2) Click the green "Code" button near the upper right corner of the screen.
3) Select "Download Zip" from the dropdown menu that appears upon "Code" button click.
4) From within your Downloads folder (or bar along the bottom of your browser), right click the .zip file and extract(unzip) its contents.
5) Open the unzipped folder/files using Visual Studio Code or similar source code editing program.
6) Install all required dependencies from the package.JSON folder, and then build the program.  To do this using Node Package Manager (npm), first navigate to the root directory of the project in your console.  You can then type the following commands to install and build the program.

    <code>npm install</code>

    <code>npm run build</code>

7) Once the code is built, a "dist/" directory will be created in the root directory of the project.  Launch the "index.html" file found here and it should open with your default web browser.
**Option 2** (via git console/terminal)
1) Open your Git enabled terminal/console and navigate to a directory that you wish to download this project to.
2) Type the following line of code into your terminal/console to automatically download the project to your current direcory and hit return/enter

    <code>git clone https://github.com/RMGit-it/code_typing_game</code><br>

3) To take a look at this repository's files, navigate to the root directory of the project in the terminal/console, and type

    <code>code .</code> and then hit return/enter.

_The project should automatically launch using your default code editor._
4) Using the two terminal commands shown just below, npm will install all required dependencies from the package.JSON folder, and build the program. To use these npm commands, make sure your present working directory is the root folder of the project in your console. Here are the commands to install and build the program:

    <code>npm install</code>

    <code>npm run build</code>

5) Once the code is built, a "dist/" directory will be created in the root directory of the project.  Launch the "index.html" file found here, and it will open in your default web browser.
## **Usage / Examples / How to Play**
* On page load, you will be asked to select a flavor for the prompts that you will be facing in the round. Examples include "Ampersandstravaganza", "JavaScript Reserved Keywords", "Functions and Dot Notation."
* Once you have made your prompt flavor selection, the game begins.
* Type what you see centered near the top of the screen (egs. {}, (, or &mdash;).
* Press `<enter>` once you have got what you have typed all green.
* Repeat until you've made it through all of that round's prompts.

_Output:_
* Your progress through the genre will be shown as a fraction under the heading **Prompt #**
* A timer will count up from 0 as soon as you made your genre selection 
## **Planned Features**
- timed game mode
- **enhanced scorekeeping**
- **randomize order of prompts**
- **add audio stinger(s)**
- **blocked out spaces for ads**
## **Specs**
MVP:
- promt user with a string pulled from an array that they have to type exactly before moving on to the next string.

**Strech Goals**
all the bolded "Planned Features" above, namely:
- **enhanced scorekeeping**
- **randomize order of prompts**
- **allow user to add prompts**
- **add audio stinger(s)**
- **blocked out spaces for ads**

## **Known Bugs**
- when entering a new prompt, any phrase that has '<' followed directly by more characters does not print properly to the DOM. '<' and '< something' appear without issue.
  - fixed 12.2.2020
- blinking cursor will occasionally speed up
## **Technology Used**
* HTML
* JavaScript
* Bootstrap
* jQuery
* CSS
* Webpack
* npm
## **Authors and Contributors**
Authored by: Randel Moore, Nick Hennessy, Tyler Sinks, Patrick Osten
## **Contact**
RMGit.it@gmail.com
## **License**

GPLv3

Copyright © 2020 Randel Moore, Nick Hennessy, Tyler Sinks, Patrick Osten

## **Project Status**
_Achieved_
- elapsed time works
- styling looks sleek
- progress through the chosen genre of prompts works
- MVP feels achieved
_In Progress_
- adding sound effects
- adding placeholders for ads
- ability to play multiple games with a cumulative score tracked
