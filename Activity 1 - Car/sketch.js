function setup() {
  createCanvas(400, 400);
  background(119, 203, 209);
}

function draw() {
  //Road
  noStroke();
  fill(105, 110, 106);
  rect(0, 260, 400, 80);
  
  fill(37, 38, 37);
  rect(0, 280, 400, 80);
  
  fill(188, 194, 25);
  rect(10, 290, 55, 10);
  rect(90, 290, 55, 10);
  rect(170, 290, 55, 10);
  rect(250, 290, 55, 10);
  rect(330, 290, 55, 10);
  
  fill(105, 110, 106);
  rect(0, 330, 400, 80);
  
  //Base
  fill(227, 197, 207);
  rect(100, 100, 220, 70);
  rect(60, 170, 280, 80);
  rect(45, 190, 15, 60);

  //Windows
  fill(53, 184, 219);
  rect(115, 110, 95, 60);
  rect(225, 110, 70, 60);

  //Handles
  fill(194, 107, 136);
  rect(175, 180, 30, 12);
  rect(260, 180, 30, 12);
  
  //Wheels
  fill(107, 84, 91);
  circle(105, 260, 80);
  circle(285, 260, 80);
  
  fill(161, 141, 147);
  circle(105, 260, 40);
  circle(285, 260, 40);
  
  //Lights
  fill(227, 207, 57);
  rect(45, 215, 15, 20);
  
  fill(181, 45, 45);
  rect(325, 215, 15, 20);
  rect(328, 200, 12, 10);
}
