// # of bolcks on the scree
var numOfBlocks = 20
// size of blocks
var blockSize = 20

// snakehead position
var headX = 0
var headY = 0

// snakehead speed
var speedX = 0
var speedY = 0

// snakeLength
var tailLength = 3

//tails contain old heads positions
var tails = [];

// apples position
var appleX = 0
var appleY = 0

function setup() {
  createCanvas(400, 400);
  frameRate(10)

  // head starts in the middle ofscreen
  headX = numOfBlocks/2
  headY = numOfBlocks/2

  // pick andom number between 0 and -1. (size of screen)
  appleX = round(random(0, numOfBlocks - 1))
  appleY = round(random(0, numOfBlocks - 1))
}

function draw() {
  background(0, 0, 0)
  // draw head
  fill(255)
  rect(headX * blockSize,
       headY * blockSize,
      blockSize,
      blockSize)
  // update position of snakes head when key is pressed
  headX = headX + speedX
  headY = headY + speedY
  // loop back inside the frame
  if (headX < 0) {
    headX = numOfBlocks
  }
  if (headX > numOfBlocks) {
    headX = 0
  }
  if (headY < 0) {
    headY = numOfBlocks
  }
  if (headY > numOfBlocks) {
    headY = 0
  }
  // add head to tails array
  tails.push({x: headX, y: headY})
  //remove first tails when its loo long
  while(tails.length > tailLength) {
    tails.shift()
  }
  // draw all positions in tails array as rectangles
  for(var i = 0; i < tails.length; i++){
    rect(tails[i].x * blockSize,
         tails[i].y * blockSize,
         blockSize,
         blockSize)
}


  //draw the apple
  fill(255, 0, 0)
  rect(appleX * blockSize,
       appleY * blockSize,
      blockSize,
      blockSize)
  // when hitting the spple
  if (headX ==appleX && headY == appleY) {
    appleX = round(random(0, numOfBlocks - 1))
    appleY = round(random(0, numOfBlocks - 1))
    tailLength++
  }
  // when the snakeis moving
  if (speedX != 0 || speedY != 0) {
    for(var i = 0; i < tails.length - 1; i++){
      if(headX == tails[i].x && headY == tails[i].y) {
        //the game ends now restart

      }
    }
  }
}


function keyPressed() {
  if(key == 'w') {
    speedX = 0
    speedY = -1
  } else if(key == 's') {
      speedX = 0
      speedY = 1
  } else if(key == 'a') {
      speedX = -1
      speedY = 0
  } else if(key == 'd') {
      speedX = 1
      speedY = 0
  }
}