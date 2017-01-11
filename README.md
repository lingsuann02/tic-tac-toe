# Tic Tac Toe Programming Challenge #

## Requirements ##
Your machine must have **npm** and **Node.js** to run the tic-tac-toe app.
Supports IE11 and above.

## Languages ##
Angular 2, Typescript

## How to run ##
1. cd to the tic-tac-toe repo.
2. Run **npm install** in the command line to install dependencies.
3. Run **npm start** in the command line to start the server and launch the web app in your browser (the web app will run on port 3000).

## Other Information ##
A barebones copy of [Angular Quickstart](https://github.com/angular/quickstart) was used to get Angular 2 up and running quickly.

Unit testing was not implemented although it would be useful for developing rule checking functionality is correct and that the AI makes the correct and best moves.

The computer calculates its chances of gaining three in a row by looping thru all possible winning combinations for the user and the computer before making its choice.

The tic tac toe AI chooses its moves in the following way:
1. The AI will always prevent the player from making three in a row.
2. If the user does not have two in a row, the AI will mark the first square of the next available row that it can use to win.

This means the computer will always behave in the same way when squares are clicked in the same sequence. To remove predictability of the computer's moves, the computer should randomly mark one of the squares which is closest to three in a row. 

Bootstrap css has been used as a base styling to ensure that all browsers have the same styling instead of a css reset stylesheet.

The app does not have a persistance layer so nothing is saved to the server and the user cannot resume a previous game.

The tic tac toe squares use the unit 'vh' to ensure that the user will always be able to see the entire tic tac toe screen at all times regardless of screen size.

## Areas To Improve ##
1. The loop checking if the user's move has made three in a row can be further optimised as it will always check all 8 winning possibilities even when some of those possibilities do not contain the user's move.
2. The loop checking the board should be refactored to be easier to read.
3. The opponent's moves should not be predictable.