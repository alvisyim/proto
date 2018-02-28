var data = sessionStorage.getItem('score');

function setup() {
  createCanvas(600,400);
}
function draw () {
  background(0);
  textAlign(CENTER);
  fill(255);
  textSize(50);
  text(data,0,0,width, height);
}
