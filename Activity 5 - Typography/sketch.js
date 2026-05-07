//Pharse
var word = "Be Brave!"
var word2 = "Follow your dreams with courage and hope!"
var font1;

//Preloading Font
function preload(){
  font1= loadFont("fonts/CookieRun Regular.otf");
}

//Setting the word with the font
function setup() {
  createCanvas(400, 400);
  background(204, 173, 35);
  fill(255);
  textFont(font1, 50);
  textAlign(CENTER);
  text(word,190,200);
  textFont(font1, 15);
  textAlign(CENTER);
  text(word2,190,220);
}
