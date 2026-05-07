let ballX, ballY, ballSpeedX, ballSpeedY;
let paddleX, paddleW;
let score = 0;
let gameOver = false;

function setup() {
  createCanvas(600, 400);
  startGame();
}

function draw() {
  background(30);
  
  if (!gameOver){
  //Moving the Ball
  ballX += ballSpeedX;
  ballY += ballSpeedY;
    
  //Making the ball bounce of the side walls
  if (ballX < 0 || ballX > width) ballSpeedX *= -1;
  
  //Making the ball bounce of the top
  if (ballY < 0) ballSpeedY *= -1;
  
  //Paddle follows the mouse
  paddleX = constrain(mouseX, 0, width - paddleW);
  
  //Checking if the ball hits the paddle
  if ( ballY + 10 >= height - 20 &&
     ballX > paddleX &&
     ballX < paddleX + paddleW){
    ballSpeedY *= -1;
    score++;
  }
    
  //Checking for a game over
    if (ballY > height) gameOver = true;
    
  //Ball
  fill(255,255,255);
  ellipse(ballX, ballY, 20);
    
  //Paddle
  fill(0,255,100);
  rect(paddleX, height - 20, paddleW, 10)
    
  //Showing Score
  fill(255);
  textSize(16);
  text("SCORE: " + score, 40, 20);
  text("PING PONG", 300,100)
  } else {
    //Playing the Game Over Scene
    fill(255,0,0);
    textAlign(CENTER);
    textSize(32);
    text("!GAME OVER!", width / 2, height / 2 - 20);
    textSize(20);
    text("Click to Restart!", width / 2, height / 2 + 20);
  }
}

function mousePressed(){
  if (gameOver) {
    startGame();
  }
}

function startGame(){
  ballX = width / 2;
  ballY = height / 2;
  ballSpeedX = 4;
  ballSpeedY = 4;
  paddleW = 100;
  score = 0;
  gameOver = false;
}