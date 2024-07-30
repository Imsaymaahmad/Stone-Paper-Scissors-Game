let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const botScorePara = document.querySelector("#bot-score");

const genBotChoice = () => {
  const options = ["stone", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, botChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beat bot's ${botChoice} :)`;
    msg.style.backgroundColor = "green";
  } else {
    botScore++;
    botScorePara.innerText = botScore;
    msg.innerText = `You lost. Bot's ${botChoice} beat your ${userChoice} :(`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const botChoice = genBotChoice();

  if (userChoice === botChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "stone") {
      userWin = botChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = botChoice === "scissors" ? false : true;
    } else {
      userWin = botChoice === "stone" ? false : true;
    }
    showWinner(userWin, userChoice, botChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});