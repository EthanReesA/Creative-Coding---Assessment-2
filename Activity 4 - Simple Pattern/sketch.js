function setup() {
  createCanvas(400, 400);
  background(150);
  
  //Big Sqaures
  for (let i =  0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      stroke (100);
      fill(25, random(100,255), random(100,255));
      rect(i*25, j*25, 20, 20);
    }
  }
  
  //Small Circles and Rectangles
    for (let l = 0; l < 20; l++) {
      for (let p = 0; p < 20; p++){
        noStroke();
        let s = p % 2
        if (s==0){
          fill(random(60,175), 0, random(10,75));
          rect(l*25, p*25, 15, 20);
        }
        else{
        fill(random(205,255), random(150,255), random(60,65));
        circle(l*25, p*25, 8);  
        }
      }
    }
}