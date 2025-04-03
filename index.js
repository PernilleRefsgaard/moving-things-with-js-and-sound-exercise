'use strict'

const dodger = document.getElementById("dodger");

dodger.style.bottom = "0px";

document.addEventListener("keydown", function (event) {
    console.log(event);
  });

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    dodger.style.left = `${left - 5}px`;
  }
});

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  
  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

document.addEventListener("keydown", function (e) { 
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
  
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const gameWidth = 400;
    const dodgerWidth = 40; 
  
    if (left < gameWidth - dodgerWidth) {
      dodger.style.left = `${left + 5}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") {
      moveDodgerUp();
    }
  });

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);
  
  if (bottom < 380) { 
    dodger.style.bottom = `${bottom + 5}px`;
  }
}

const movementSound = document.getElementById("movementSound");

function playSoundOnMovement() {
  movementSound.currentTime = 0; 
  movementSound.play();
}

dodger.style.left = "180px"; 
dodger.style.bottom = "0px";





