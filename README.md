Parachute Catcher Game README

Introduction

Parachute Catcher is a simple JavaScript game where the player moves a boat left and right to catch a falling parachute. The game uses basic HTML, CSS, and JavaScript to control the game's logic and render the game elements on the screen.

How to play:

To play the game, use the arrow keys (left and right) or the "A" and "D" keys to move the boat horizontally. The goal is to position the boat below the falling parachute and catch it before it hits the water.

Code Explanation:

Below is a brief explanation of the code:

Select the game elements:

const game = document.getElementById('game');
const parachute = document.getElementById('parachute');
const boat = document.getElementById('boat');
Initialize the boat speed variable:
let boatSpeed = 4;

Define the startGame function:

Set the parachute's starting position.
Set the boat's starting position.
Add event listeners for keydown events to move the boat.
Start the parachute falling animation.
function startGame() {
  // ...
}

Define the moveBoat function:

Update the boat's position based on the given speed.
Ensure the boat stays within the game's boundaries.
function moveBoat(speed) {
  // ...
}

Define the fall function:

Update the parachute's position by moving it down.
Check if the parachute has reached the water level.
If the parachute is still above water, continue the falling animation.
function fall() {
  // ...
}

Define the checkCollision function:

Check if the parachute has collided with the boat.
If the collision has occurred, display a success message.
If the parachute missed the boat, display a failure message.
Restart the game.
function checkCollision() {
  // ...
}
Start the game:
startGame();

How to set up the game:

To set up the game, create an HTML file with a game container element and the boat and parachute elements inside it. Then, link the CSS and JavaScript files to style and run the game.
