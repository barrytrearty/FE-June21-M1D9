"strict";

const gameBoard = document.getElementById("main-board");
const gameBoardSquares = document.getElementsByClassName("number-square");

const generateBoard = function (boardLimit) {
  for (let number = 1; number <= boardLimit; number++) {
    let newSquare = document.createElement("div");
    newSquare.innerText = number;
    newSquare.classList.add("number-square");
    // newSquare.classList.add("selected");
    // newSquare.onclick = selectDay;
    gameBoard.appendChild(newSquare);
  }
};

let alreadySelected = [];

const generateBingoNumber = function () {
  let randomNumber = Math.floor(Math.random() * 76 + 1);
  while (alreadySelected.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 76 + 1);
  }
  return randomNumber;
};

const pushButton = function () {
  let bingoNumber = generateBingoNumber();
  for (let square of gameBoardSquares) {
    if (bingoNumber == Number(square.innerText)) {
      square.classList.add("selected");
      console.log(bingoNumber);
      alreadySelected.push(bingoNumber);
    }
  }
};

generateBoard(76);
