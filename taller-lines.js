(5, 0) -> (5, 20)
(10, 0) -> (10, 40)
....
(400, 0) -> (400, 400)



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 5; i <= 380; i = i + 5) {
    var startX = i;
    var startY = 0;
    var endX = i;
    var endY = 20*i*0.1;
    line(startX, startY, endX, endY);
  }
}
