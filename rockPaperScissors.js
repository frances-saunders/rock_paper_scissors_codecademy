const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error! Please enter rock, paper, or scissors.");
  }
};

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "You tied!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer outsmarted you this time. Better luck next time!";
    } else {
      return "You beat the computer!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer outsmarted you this time. Better luck next time!";
    } else {
      return "You beat the computer!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer outsmarted you this time. Better luck next time!";
    } else {
      return "You beat the computer!";
    }
  }
  if (userChoice === "bomb") {
    return "You cheater! But we'll let it slide this time - YOU WIN!";
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("You played: " + userChoice);
  console.log("The computer played: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
