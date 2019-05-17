var socket;

function setup() {
  createCanvas(400, 400);
  socket = io.connect('http://localhost');
}

function draw() {
  background(220);
  fill(0,255,0);
  noStroke();
  rectMode(CENTER);
  rect(200,200,100,100);
}