'use strict';
//document.querySelector('.number').textContent = 18;

document.querySelector('.guess').value = 1;
let secreteNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.score').textContent = score;
let highscore = 0;
//document.querySelector('.number').textContent = secreteNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber);
  if (!guessNumber) {
    displaymessage('no number');
    //win
  } else if (secreteNumber === guessNumber) {
    displaymessage('correct guess  👏');
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (secreteNumber != guessNumber) {
    if (score > 1) {
      displaymessage(secreteNumber > guessNumber ? 'low' : 'high');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('you lose the game');
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});
//low
//else if (secreteNumber > guessNumber) {
//if (score > 1) {
//document.querySelector('.message').textContent = 'low';
//score--;
//document.querySelector('.score').textContent = score;
//} else {
//document.querySelector('.message').textContent = 'you lose the game';
//score = 0;
//document.querySelector('.score').textContent = score;
//}
// }
//high
// else if (secreteNumber < guessNumber) {
//  if (score > 1) {
//     document.querySelector('.message').textContent = 'high';
//    score--;
//    document.querySelector('.score').textContent = score;
//  } else {
//   document.querySelector('.message').textContent = 'you lose the game';
//   score = 0;
//  document.querySelector('.score').textContent = score;
//}
//}

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secreteNumber = Math.trunc(Math.random() * 20 + 1);
  //document.querySelector('.number').textContent = secreteNumber;
  displaymessage('start again 👍');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
function displaymessage(message) {
  document.querySelector('.message').textContent = message;
}
