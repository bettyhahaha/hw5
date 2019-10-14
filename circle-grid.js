function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (var i = 20; i <= 380; i = i + 20) {
    var startX = i;
    var startY = 1;
    noStroke();
    
    circle(startX, startY + 10, 15);

  if (startX >= width-20) {
    startX = 20;
    startY = i;
  }

  }
}
