//COUNTER OF CLICKS
let noclicks = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  push();
  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("CLICK ON ME!", 65, 25);
  pop();
}

function mousePressed() {
  
  //FIRST CANVAS
  noclicks += 1;
  if (noclicks == 1) {
    background(170, 227, 226);
    noStroke();
    fill(52, 235, 168);
    circle(200, 200, 150);
    for (let y = 100; y <= 300; y += 100) {
      for (let x = 100; x <= 300; x += 100) {
        if (y == 200 && x == 200) {
          fill(52, 235, 168);
          circle(x, y, 35);
        } else {
          fill(47, 222, 76);
          circle(x, y, 35);
        }
      }
    }
  }
  //SECOND CANVAS
  if (noclicks == 2) {
    background(50);
    push();
    stroke(102, 41, 61);
    fill(133, 108, 168);
    for (let y2 = 100; y2 <= 600; y2 += 200) {
      for (let x2 = 50; x2 <= 400; x2 += 250) {
        rect(x2, y2, 50, 100);
      }
    }
    pop();

    for (let x3 = 0; x3 <= 400; x3 += 50) {
      for (let y3 = 0; y3 <= 600; y3 += 100) {
        stroke(51, 18, 22);
        fill(230, 71, 137);
        circle(x3, y3, random(10, 20));
      }
    }
    for (let x4 = 50; x4 <= 400; x4 += 50) {
      for (let y4 = 50; y4 <= 600; y4 += 100) {
        stroke(67, 70, 97);
        fill(124, 126, 143);
        circle(x4, y4, random(10, 20));
      }
    }
  }
  //THIRD CANAVS
  if (noclicks == 3) {
    background(0);
    fill(random(80, 255));
    for (let x5 = 10; x5 <= 400; x5 += 25) {
      for (let y5 = 5; y5 <= 400; y5 += 20) {
        circle(x5, y5, 10);
        for (let x6 = 50; x6 <= 350; x6 += 50) {
          for (let y6 = 100; y6 <= 300; y6 += random(75, 100)) {
            push();
            fill(random(50, 168), random(50, 119), random(50, 168));
            circle(x6, y6, 50);
            pop();
          }
        }
      }
    }
  }
  //CLEAR/REPEAT
  if(noclicks==4){
     background(0);
    noclicks = 0;
     }
}
