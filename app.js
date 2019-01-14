// # of bolcks on the scree
var numOfBlocks = 20
// size of blocks
var blockSize = 20

// snakehead position
var headX = 0
var headY = 0

function setup() {
  createCanvas(400, 400);
  frameRate(10)
}

function draw() {
  background(0, 0, 0);
  fill(255)
  rect(headX * blockSize,
       headY * blockSize,
      blockSize,
      blockSize)
}