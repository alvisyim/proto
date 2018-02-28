var playerScore = 123456780;

function setup() {
  createCanvas(600,400);
}
function draw (){
  background(0);
  textAlign(CENTER);
  sessionStorage.setItem('score', playerScore);
  fill(255);
  textSize(50);
  text(playerScore,0,0,width, height);

location.replace("highscore.html");
}
