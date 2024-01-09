const name = prompt ("Enter your full name");

document.getElementById('rock-button').addEventListener('click', function() {
  playGame('rock');
});

document.getElementById('paper-button').addEventListener('click', function() {
  playGame('paper');
});

document.getElementById('scissors-button').addEventListener('click', function() {
  playGame('scissors');
});

function playGame(playerMove) {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  let result = '';

  if (playerMove === computerMove) {
    result = 'It\'s a tie!';
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result = 'You win!';
  } else {
    result = 'Computer wins!';
  }

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}
