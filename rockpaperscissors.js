////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move === null || move === undefined)
        {return getInput()}
            else {return move}
}

function getComputerMove(move) {
    if (move === null || move === undefined)
        {return randomPlay()}
            else {return move}
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove){
        winner = 'tie';
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
    } else if (computerMove === 'rock' && playerMove === 'scissors') {
        winner = 'computer'; 
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
    } else if (computerMove === 'scissors' && playerMove === 'paper') {
        winner = 'computer';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
    } else if (computerMove === 'paper' && playerMove === 'rock') {
        winner = 'computer';
    }
    return winner;
}

function playToFive () {
  console.log ("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins <5 && computerWins <5) {
        var playerMove = getPlayerMove ();
        var computerMove = getComputerMove ();
        var winner = getWinner (playerMove, computerMove); 
        if (winner ==='player') {
        playerWins +=1;
        }
        else if (winner === 'computer') {
        computerWins += 1;
    }
    }
    return [playerWins, computerWins];
}



