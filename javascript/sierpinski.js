function strokeTriangle(x, y, size) {
  var aX = x, aY = y;
  var bX = x + size, bY = y;
  var cX = x + size/2, cY = y - size * Math.sqrt(3) / 2;

  c.fillStyle = "black";
  c.beginPath();
  c.moveTo(aX, aY);
  c.lineTo(bX, bY);
  c.lineTo(cX, cY);
  c.lineTo(aX, aY);
  c.fill();
}

function strokeThreeTriangles(x, y, size) {
  if (size <= 32) {
    strokeTriangle(x, y, size / 2);
    strokeTriangle(x + size / 2, y, size / 2);
    strokeTriangle(x + size / 4, y - size * Math.sqrt(3) / 4, size / 2);
  } else {
    strokeThreeTriangles(x, y, size / 2);
    strokeThreeTriangles(x + size / 2, y, size / 2);
    strokeThreeTriangles(x + size / 4, y - size * Math.sqrt(3) / 4, size / 2);
  }
}

function drawSierpinskiTriangle(width, height) {
  c.clearRect(0, 0, width, height);
  var size = (width > height ? height : width) * 0.95;
  strokeThreeTriangles((width - size) / 2, height * 0.90, size);
}
