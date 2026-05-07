let img 

function preload(){
  img = loadImage("weathergirl - flavor foley.jpg")
}

function setup() {
  createCanvas(350, 350);
  background(255);
}

//Watercolor Effect
function draw(){
  noStroke();
  let x = random(width)
  let y = random(height)
  let r = random(20,80)
  fill(random(0,145), random(123,161), random(255), 75);
  ellipse(x, y, r, r);
  
  translate(width/2, height/2);
  
  //Image
  clip(mask);
  image(img,-75,-120,150,150)
}

//The Mask holds all the shapes surrounding the image
function mask(){
  square(-100,-140,200)
}