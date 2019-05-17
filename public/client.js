var socket;

function setup() {
  createCanvas(400, 400);
  background(220);
  socket = io.connect('https://thinkelvin-node-test.herokuapp.com/');
}

function draw() {
  
  // fill(0,255,0);
  // noStroke();
  // rectMode(CENTER);
  // rect(200,200,100,100);
}

function mouseDragged() {
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 40,40);
}

window.addEventListener('beforeunload', (event) => {
  io.close();
});
