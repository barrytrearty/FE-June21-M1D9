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
    gameBoard.appendChild(newSquare);
  }
  boardButton.classList.remove("hidden");
  newNumber.classList.remove("hidden");
  gameBoard.classList.remove("hidden");
};

// Generate new unique number
const generateUniqueNumber = function (array) {
  let randomNumber = Math.floor(Math.random() * 76 + 1);
  while (array.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 76 + 1);
  }
  array.push(randomNumber);
  return randomNumber;
};

// Generate and mark off card
const generateNewBingoNumber = function () {
  let bingoNumber = generateUniqueNumber(alreadySelected);
  for (let square of gameBoardSquares) {
    if (bingoNumber == Number(square.innerText)) {
      square.classList.add("selected");
      console.log(bingoNumber);
      console.log(alreadySelected);
    }
  }
};

// Add new player card
const generatePlayerBoard = function () {
  // Create the div
  let newPlayer = document.createElement("div");
  newPlayer.classList.add("new-player");
  userSection.appendChild(newPlayer);
  // Create array of 24 unique numbers
  let playerNumberArray = [];
  for (let num = 1; num <= 24; num++) {
    generateUniqueNumber(playerNumberArray);
  }
  // Add unique numbers the div as squares
  for (let number = 0; number <= 23; number++) {
    let newSquare1 = document.createElement("div");
    newSquare1.innerText = playerNumberArray[number];
    newSquare1.classList.add("new-player-square");
    newPlayer.appendChild(newSquare1);
  }
};

//Game Over
let gameOverCounter = 0;
newNumber.addEventListener("click", function () {
  gameOverCounter++;
  console.log(gameOverCounter);
  if (gameOverCounter === 76) {
    gameBoard.remove();
    userSection.remove();
    newNumber.remove();
    title.innerText = "Game Over";
  }
});
