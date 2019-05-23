var socket;

function setup() {
  createCanvas(400, 400);
  background(220);
  //socket = io.connect('https://thinkelvin-node-test.herokuapp.com/');
  socket = io(); // will connect to the host which serves this page
  socket.on('mouse', newDraw);
}

function draw() {
  
  // fill(0,255,0);
  // noStroke();
  // rectMode(CENTER);
  // rect(200,200,100,100);
}

function newDraw(data){
  noStroke();
  fill(255,0,0);
  ellipse(data.x, data.y, 36,36);
}

function mouseDragged() {
  var data = {
    x: mouseX,
    y: mouseY
  };
  socket.emit('mouse', data); // this message only sends back to the server but not every connected clients

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 40,40);
}


