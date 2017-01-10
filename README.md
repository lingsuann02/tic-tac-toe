# Tic Tac Toe Programming Challenge #

## Requirements ##
Your machine must have **npm** and **Node.js** to run the tic-tac-toe app.

## Languages ##
Angular 2, Typescript

## How to run ##
1. cd to the tic-tac-toe repo.
2. Run **npm install** in the command line to install dependencies.
3. Run **npm start** in the command line to start the server and launch the web app in your browser (the web app will run on port 3000).

## Other Information ##
A barebones copy of [Angular Quickstart](https://github.com/angular/quickstart) was used to get Angular 2 up and running quickly.

Unit testing was not implemented although it would be useful for developing rule checking functionality is correct and that the AI makes the correct and best moves.

The computer calculates its chances of gaining three in a row by looping thru all possible winning combinations for the user and the computer before making its choice. The computer is programmed to prevent the user from making three in a row unless the computer can win the game. However, when the user is not close to winning, the computer will choose a square which is closest to three in a row. Currently, the computer will always mark the last square closest to three in a row. To improve the computer, the computer should randomly mark one of the squares which is closest to three in a row.

Bootstrap css has been used as a base styling to ensure that all browsers have the same styling instead of a css reset stylesheet.

The app does not have a persistance layer so nothing is saved to the server and the user cannot resume a previous game.