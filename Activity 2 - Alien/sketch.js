function setup() {
  createCanvas(400, 400);
  background(11, 10, 69);
  rectMode(CENTER);
}

function draw() {
  noStroke();
  
  // Body
  push();
  noStroke();
  fill(64, 63, 105);
  circle(200, 96, 152);
  fill(101, 100, 145);
  circle(200, 96, 148);
  fill(144, 143, 184);
  circle(200, 96, 140);
  fill(255);
  circle(200, 96, 130);
  pop();
  
  fill(28, 158, 74);
  circle(200, 275, 45);
  fill(39, 176, 123);
  circle(205, 273, 36);

  fill(46, 139, 153);
  circle(177, 265, 70);
  fill(66, 179, 164);
  circle(185, 260, 51);

  fill(43, 61, 140);
  circle(156, 230, 100);
  fill(66, 128, 179);
  circle(165, 225, 81);

  fill(66, 128, 179);
  circle(150, 155, 130);
  fill(91, 160, 217);
  circle(163, 155, 118);
  
  push();
  rotate(1);
  fill(78, 115, 153);
  rect(210,-15,120,10);
  
  fill(43, 90, 138);
  rect(189,-30,50,10);
  pop();
  
  fill(19, 62, 105);
  circle(110,170,16);
  circle(155,200,25);
  circle(135,165,10);

  push();
  rotate(1);
  fill(158, 181, 186);
  ellipse(190, -80, 200, 95);
  
  fill(188, 201, 204);
  ellipse(190, -80, 180, 85);
  
  fill(158, 181, 186);
  ellipse(190, -80, 160, 75);
  
  fill(188, 201, 204);
  ellipse(190, -80, 110, 55);
  pop();

  fill(124, 187, 214);
  circle(200, 96, 110);
  fill(132, 225, 240);
  circle(208, 85, 85);

  fill(169, 204, 235);
  rect(165, 96, 10, 85);

  fill(71, 137, 196);
  rect(185, 96, 10, 115);
  fill(89, 175, 212);
  rect(185, 90, 10, 75);
  
  fill(5, 43, 77);
  circle(170,96,15);
  circle(230,96,15);
  ellipse(200,75,20,10);
  ellipse(200,125,50,20);
  circle(152,264,11);
  rect(154,250,89,8);
  rect(166,237,74,8);
  
  // Pupils
  fill(171, 210, 245);
  circle(168,93,6);
  circle(228,93,6);
  circle(200,125,13);
  
  // Stars
  fill(255,255,255);
  circle(198,122,6);
  circle(68,50,4);
  circle(54,64,3);
  circle(73,103,2);
  circle(274,164,5);
  circle(294,187,1);
  circle(56,188,3);
  circle(13,345,8);
  circle(28,362,3);
  circle(327,176,2);
  circle(236,239,1);
  circle(225,226,6);
  circle(245,207,4);
  circle(345,307,5);
  circle(382,342,3);
  circle(325,364,2);
  circle(361,379,7);
  
}
