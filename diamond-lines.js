(190, 0) -> (210, 0)
(180, 10) -> (220, 10)
...
(0, 200) -> (400, 200)
(10, 210) -> (390, 210)
(400, 0) -> (0, 400)

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 390; i = i + 10) {
    var startX = 200;
    var startY = i;
    var endX = 200;
    var endY = i;
    line(startX-i, startY, endX+i, endY);
  }
}
