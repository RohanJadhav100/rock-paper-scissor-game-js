let options = ["Rock", "Paper", "Scissor"];

function startGame(userChoice) {
  console.log(userChoice);
  let number = Math.floor(Math.random() * (3 - 0) + 0);
  let computerChoice = options[number];
  console.log(computerChoice);
  if (userChoice == computerChoice) {
    $("#matchText").html(
      `Human choice is ${userChoice} and Computer choice is ${computerChoice}.<br> Match Draw`
    );
  } else if (userChoice == "Rock" && computerChoice == "Scissor") {
    $("#matchText").html(
      `Human choice is ${userChoice} and Computer choice is ${computerChoice}.<br> You Won`
    );
  } else if (userChoice == "Paper" && computerChoice == "Rock") {
    $("#matchText").html(
      `Human choice is ${userChoice} and Computer choice is ${computerChoice}.<br> You Won`
    );
  } else if (userChoice == "Scissor" && computerChoice == "Paper") {
    $("#matchText").html(
      `Human choice is ${userChoice} and Computer choice is ${computerChoice}. <br>You Won`
    );
  } else {
    $("#matchText").html(
      `Human choice is ${userChoice} and Computer choice is ${computerChoice}.<br> You Lose`
    );
  }
}

$(document).ready(function () {
  $("#rock").click(function () {
    startGame("Rock");
  });
  $("#paper").click(function () {
    startGame("Paper");
  });
  $("#scissor").click(function () {
    startGame("Scissor");
  });
});
