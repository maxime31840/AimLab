const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');
const display = document.getElementById("time");

let score = 0;
let temps = 30;
let timerInterval;
let circleInterval;

function startTimer() {
  display.textContent = temps;
  
  timerInterval = setInterval(() => {
    temps--;
    display.textContent = temps;

    if (temps <= 0) {
      clearInterval(timerInterval);
      clearInterval(circleInterval);
      alert(`Temps écoulé ! Ton score est de ${score} !
        Actualise la page pour redémarrer :)`);

      game.innerHTML = ""; 
    }
  }, 1000);
}

function createCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');

  const size = 60;
  const x = Math.random() * (window.innerWidth - size);
  const y = Math.random() * (window.innerHeight - size - 100);
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  circle.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    circle.remove();
  });

  game.appendChild(circle);

  setTimeout(() => {
    if (game.contains(circle)) circle.remove();
  }, 1000);
}

function startGame() {
  score = 0;
  scoreDisplay.textContent = score;
  temps = 30;
  game.innerHTML = "";

  startTimer();
  circleInterval = setInterval(createCircle, 800);
}

startGame();
