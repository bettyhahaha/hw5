(200, 200, 20)
(200, 200, 30)
(200, 200, 40)
(200, 200, 50)
(200, 200, 60)
(200, 200, 70)
...
(200, 200, 390)

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 390; i = i + 10) {
    var startX = 200;
    var startY = 200;
    var endX = i;
noFill();
   circle(startX, startY, endX);
  }
}
