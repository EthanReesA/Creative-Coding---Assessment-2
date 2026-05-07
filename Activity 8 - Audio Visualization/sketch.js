//Setting up the Microphone
let mic;

function setup() {
  createCanvas(400, 400);
  background(50);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let micLevel = mic.getLevel() * height * 5;
  rectMode(CENTER);
  
  //MIC LEVEL
  fill(81, 97, 122);
  rect(200, 200, micLevel + 25);
  
  //OBJECT IN THE MIDDLE
  fill(random(130, 150), 230, 122);
  rect(200, 200, 20);
}

//CLEAR
function mousePressed() {
  background(50);
}
