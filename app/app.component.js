"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Square = (function () {
    function Square(state, display) {
        this.state = state;
        this.display = display;
    }
    return Square;
}());
var CombinationSquare = (function () {
    function CombinationSquare(combination, score) {
        this.combination = combination;
        this.score = score;
    }
    return CombinationSquare;
}());
var AppComponent = (function () {
    function AppComponent() {
        this.user = "X";
        this.opponent = "O";
        this.turns = 9;
        this.alert = "";
        this.squares = [
            new Square('sq-available', ""),
            new Square('sq-available', ""),
            new Square('sq-available', ""),
            new Square('sq-available', ""),
            new Square('sq-available', ""),
            new Square('sq-available', ""),
            new Square('sq-available', ""),
            new Square('sq-available', ""),
            new Square('sq-available', "")
        ];
        this.winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    }
    AppComponent.prototype.onRestart = function () {
        this.user = "X";
        this.opponent = "O";
        this.turns = 9;
        this.alert = "";
        this.squares = [
            new Square('sq-available', ""),
            new Square('sq-available', ""),
            new Square('sq-available', ""),
            new Square('sq-available', ""),
            new Square('sq-available', ""),
            new Square('sq-available', ""),
            new Square('sq-available', ""),
            new Square('sq-available', ""),
            new Square('sq-available', "")
        ];
    };
    AppComponent.prototype.onPlayerChange = function (player) {
        this.user = player;
    };
    AppComponent.prototype.onSquareSelect = function (square) {
        if (this.turns == 0 || this.squares[square].display.length > 0) {
            return;
        }
        this.selectSquare(square, this.user);
        this.turns--;
        var bestCombination = this.checkBoard(this.user);
        if (bestCombination.score == 3) {
            this.highlightWinningRow(bestCombination.combination);
            this.alert = "You have won.";
            this.turns = 0;
        }
        else {
            this.opponentMove();
        }
    };
    AppComponent.prototype.opponentMove = function () {
        var bestCombination = this.checkNextBestMove(this.opponent);
        for (var i = 0; i < 3; i++) {
            if (!this.squares[bestCombination.combination[i]].display) {
                this.selectSquare(bestCombination.combination[i], this.opponent);
                this.turns--;
                break;
            }
        }
        if (this.checkRowComplete(this.opponent, bestCombination.combination) == 3) {
            this.highlightWinningRow(bestCombination.combination);
            this.alert = "You have lost.";
            this.turns = 0;
        }
        else if (this.turns === 0) {
            this.alert = "It's a draw!";
        }
    };
    AppComponent.prototype.selectSquare = function (square, player) {
        this.squares[square].state = "sq-unavailable";
        this.squares[square].display = player;
    };
    AppComponent.prototype.checkRowComplete = function (player, row) {
        var score = 0;
        if (this.squares[row[0]].display == player) {
            score++;
        }
        if (this.squares[row[1]].display == player) {
            score++;
        }
        if (this.squares[row[2]].display == player) {
            score++;
        }
        return score;
    };
    // check if any winning combination has been achieved
    AppComponent.prototype.checkBoard = function (player) {
        var strongestCombination = 0;
        var highestScore = 0;
        for (var i = 0; i < this.winningCombinations.length; i++) {
            var score = 0;
            if (this.squares[this.winningCombinations[i][0]].display == player) {
                score++;
            }
            else if (this.squares[this.winningCombinations[i][0]].display && this.squares[this.winningCombinations[i][0]].display != player) {
                continue;
            }
            if (this.squares[this.winningCombinations[i][1]].display == player) {
                score++;
            }
            else if (this.squares[this.winningCombinations[i][1]].display && this.squares[this.winningCombinations[i][1]].display != player) {
                continue;
            }
            if (this.squares[this.winningCombinations[i][2]].display == player) {
                score++;
            }
            else if (this.squares[this.winningCombinations[i][2]].display && this.squares[this.winningCombinations[i][2]].display != player) {
                continue;
            }
            if (score > highestScore) {
                strongestCombination = i;
                highestScore = score;
                if (score == 3) {
                    break;
                }
            }
        }
        return new CombinationSquare(this.winningCombinations[strongestCombination], highestScore);
    };
    // check whether the AI must play defensively or offensively
    AppComponent.prototype.checkNextBestMove = function (player) {
        var strongestUserCombination = this.checkBoard(this.user);
        var strongestOpponentCombination = this.checkBoard(this.opponent);
        if (strongestOpponentCombination.score >= strongestUserCombination.score) {
            return strongestOpponentCombination;
        }
        else {
            return strongestUserCombination;
        }
    };
    AppComponent.prototype.highlightWinningRow = function (row) {
        for (var i = 0; i < 3; i++) {
            this.squares[row[i]].state = 'sq-winner';
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \n    <div id=\"ttt-game\">\n\n      <div class=\"game-restart text-center\">\n        <span (click)=\"onRestart()\">Restart</span>\n      </div>\n\n      <div class=\"game-title text-center\">\n        <p>Tic Tac Toe</p>\n      </div>\n    \n      <div class=\"game-board center-block\">\n\n        <div *ngFor=\"let sq of squares; let c = index;\" class=\"square sq-{{c}}\" [ngSwitch]=\"sq.state\" (click)=\"onSquareSelect(c)\">\n          <div [ngClass]=\"{'sq-hidden': turns == 0}\" class=\"sq-available\" *ngSwitchCase=\"'sq-available'\">{{user}}</div>\n          <div class=\"{{sq.state}}\" *ngSwitchDefault>{{sq.display}}</div>\n        </div>    \n\n      </div>\n\n      <div class=\"game-alert text-center\">\n        <p>{{alert}}</p>\n      </div>\n\n    </div>\n\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map