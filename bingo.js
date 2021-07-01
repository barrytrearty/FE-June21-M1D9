"strict";

// Selectors
const gameBoard = document.getElementById("main-board");
const gameBoardSquares = document.getElementsByClassName("number-square");
const playButton = document.getElementById("play-button");
const boardButton = document.getElementById("board-button");
const newNumber = document.getElementById("new-number-button");
const userSection = document.getElementById("user-section");
const title = document.getElementsByTagName("h1")[0];
const numberOfPlayers = document.getElementById("number-of-players");
let alreadySelected = [];

// Create new game

const generateGameBoard = function () {
  playButton.remove();
  title.innerText = "LETS PLAY";
  for (let number = 1; number <= 76; number++) {
    let newSquare = document.createElement("div");
    newSquare.innerText = number;
    newSquare.classList.add("number-square");
    // newSquare.classList.add("selected");
    // newSquare.onclick = selectDay;
    gameBoard.appendChild(newSquare);
  }
  boardButton.classList.remove("hidden");
  newNumber.classList.remove("hidden");
  gameBoard.classList.remove("hidden");
};

// Add new player card

const generatePlayerBoard = function () {
  let newPlayer = document.createElement("div");
  newPlayer.classList.add("new-player");
  userSection.appendChild(newPlayer);
  //   newPlayer

  let playerNumberArray = [];
  for (let num = 1; num <= 24; num++) {
    let newNum = Math.floor(Math.random() * 76) + 1;
    while (playerNumberArray.includes(newNum)) {
      newNum = Math.floor(Math.random() * 76) + 1;
    }
    playerNumberArray.push(newNum);
  }

  for (let number = 0; number <= 23; number++) {
    let newSquare1 = document.createElement("div");
    newSquare1.innerText = playerNumberArray[number];
    newSquare1.classList.add("new-player-square");
    // newSquare.classList.add("selected");
    // newSquare.onclick = selectDay;
    newPlayer.appendChild(newSquare1);
  }
};

const generateBingoNumber = function (num) {
  let randomNumber = Math.floor(Math.random() * num + 1);
  while (alreadySelected.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * num + 1);
  }
  return randomNumber;
};

const generateNewNumber = function (num) {
  let bingoNumber = generateBingoNumber(num);
  for (let square of gameBoardSquares) {
    if (bingoNumber == Number(square.innerText)) {
      square.classList.add("selected");
      console.log(bingoNumber);
      alreadySelected.push(bingoNumber);
      console.log(alreadySelected);
    }
  }
};

// const markOffNumber
