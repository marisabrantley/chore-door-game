let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let startButton = document.getElementById('start');

const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";


let numClosedDoors = 3;

let openDoor1, openDoor2, openDoor3;

let currentlyPlaying = true;

let score = 0;
let highScore = 0;
let currentStreak = document.getElementById('score-number');
let bestStreak = document.getElementById('high-score-number');
currentStreak.innerHTML = score;
bestStreak.innerHTML = highScore;

const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

const isClicked = (door) => {
  if(door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if(isBot(door) === true) {
    return gameOver('lose');
  }
} 

const randomChoreDoorGenerator= () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1 ) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  } 
}

doorImage1.onclick = () => {
  if(!isClicked(doorImage1) && currentlyPlaying) {
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
  } 
}

doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && currentlyPlaying) {
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  } 
}

doorImage3.onclick = () => {
  if(!isClicked(doorImage3) && currentlyPlaying) {
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
}
}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = 'Click a door to begin. Good luck!';
  randomChoreDoorGenerator();
}

startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
}

const gameOver = (status) => {
  if(status === 'win') {
   startButton.innerHTML = 'You win! Click here to play again.';
   getYourScore();
  } else {
    startButton.innerHTML = 'Game over! Click here to play again.'
    score = 0;
    currentStreak.innerHTML = score;
  }
  currentlyPlaying = false;
}

const getYourScore = () => {
    score++;
    currentStreak.innerHTML = score;
    if (score > highScore) {
      highScore = score;
      bestStreak.innerHTML = highScore;
    }
  }
  

startRound();








