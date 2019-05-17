var socket;

function setup() {
  createCanvas(400, 400);
  socket = io.connect('https://thinkelvin-node-test.herokuapp.com/');
}

function draw() {
  background(220);
  fill(0,255,0);
  noStroke();
  rectMode(CENTER);
  rect(200,200,100,100);
}

function byeSocket() {
  socket.disconnect();

}