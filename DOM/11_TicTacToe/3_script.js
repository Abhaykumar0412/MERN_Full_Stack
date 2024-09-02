let boxes = document.querySelectorAll(".box");
let startBtn = document.getElementById("button");
// let newGameBtn = document.getElementById("new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.getElementById("msg");

let turnO = true; // playerX, playerO

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO === true) { // playerX
            box.innerText = "O";
            turnO = false;
        } else { // playerO
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
                return; // Exit after finding the winner
            }
        }
    }
};

const startGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const startGameWithDelay = () => {
    const delay = 3000; // Delay in milliseconds (3 seconds)
    setTimeout(startGame, delay);
};

// Uncomment if you add functionality to the newGameBtn later
// newGameBtn.addEventListener("click", resetGame);

startBtn.addEventListener("click", startGameWithDelay);
