function setup() {
  createCanvas(400, 400);
  background(150)
}

function draw() {
  //Random Netural Color Selection
  fill(random(0,255))
  noStroke()
  
  //Trail Shapes
  square(mouseX, mouseY-5, random(1,10));
  circle(mouseX, mouseY+10, random(1,5));
  circle(mouseX+10, mouseY-10, random(1,5));
}