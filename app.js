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

function setup() {
  createCanvas(400, 400);
  frameRate(10)

  // head starts in the middle ofscreen
  headX = numOfBlocks/2
  headY = numOfBlocks/2
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