var playerScore = 1234567890;
document.getElementsByTagName('div')[0].innerHTML = playerScore;
function setup() {
  createCanvas(600,400);
}
function draw (){
  background(0);
  textAlign(CENTER);
  fill(255);
  textSize(50);
  text(playerScore,0,0,width, height);
}
