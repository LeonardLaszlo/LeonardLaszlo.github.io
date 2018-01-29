function drawFox(x, y, s) {
  c.beginPath();
  c.moveTo(x, y);
  c.lineTo(x+s/7*2, y-s/7*3);
  c.lineTo(x+s/7*3, y-s/7);
  c.lineTo(x+s/7*4, y-s/7);
  c.lineTo(x+s/7*5, y-s/7*3);
  c.lineTo(x+s, y);
  c.lineTo(x+s/2, y+s/7*3);
  c.lineTo(x, y);
  c.stroke();
}

function drawFoxes(width, height) {
  c.clearRect(0, 0, width, height);
  var radius = (width > height ? height : width) * 0.25;
  var density = 5;
  if (radius <= 150) {
    density = 3;
  } else if (radius <= 250) {
    density = 2;
  } else {
    density = 1;
  }
  for(var i = 0; i < 360; i = i + density) {
    var angle = i * Math.PI / 180;
    var correction = radius / 2;
    var x = width/2 + radius * Math.cos(angle) -correction;
    var y = height/2 + radius * Math.sin(angle);
    var green = Math.round(Math.abs(Math.sin(angle) - 1) * 105);
    c.strokeStyle = "rgb(0, " + green + ", 0)";
    drawFox(x, y, radius);
  }
}
