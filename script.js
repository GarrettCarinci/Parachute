const game = document.getElementById('game');
const parachute = document.getElementById('parachute');
const boat = document.getElementById('boat');
let boatSpeed = 4;

function startGame() {
  parachute.style.top = '0px';
  parachute.style.left = Math.floor(Math.random() * (game.clientWidth - parachute.clientWidth)) + 'px';
  boat.style.left = (game.clientWidth - boat.clientWidth) / 2 + 'px';

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'a') {
      moveBoat(-boatSpeed);
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
      moveBoat(boatSpeed);
    }
  });

  fall();
}

function moveBoat(speed) {
  const newLeft = parseInt(boat.style.left) + speed;
  if (newLeft >= 0 && newLeft <= game.clientWidth - boat.clientWidth) {
    boat.style.left = newLeft + 'px';
  }
}

function fall() {
  const parachuteTop = parseInt(parachute.style.top);
  const newTop = parachuteTop + 1;
  parachute.style.top = newTop + 'px';

  if (newTop >= game.clientHeight - boat.clientHeight - parachute.clientHeight) {
    checkCollision();
  } else {
    requestAnimationFrame(fall);
  }
}

function checkCollision() {
  const parachuteLeft = parseInt(parachute.style.left);
  const boatLeft = parseInt(boat.style.left);

  if (
    parachuteTop >= game.clientHeight - boat.clientHeight - parachute.clientHeight &&
    parachuteLeft + parachute.clientWidth >= boatLeft &&
    parachuteLeft <= boatLeft + boat.clientWidth
  ) {
    alert('You caught the parachute!');
  } else {
    alert('You missed the parachute.');
  }

  startGame();
}

startGame();