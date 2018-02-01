const sin60 = Math.sqrt(3) / 2;
const cos60 = 1 / 2;

function strokeKochSide(x, y, angle, size) {
  var newAngle = angle + Math.PI * 5 / 3;
  var aX = x, aY = y;
  var bX = x + Math.cos(angle) * size / 3, bY = y + Math.sin(angle) * size / 3;
  var cX = bX + Math.cos(newAngle) * size / 3, cY = bY + Math.sin(newAngle) * size / 3;
  var dX = x + Math.cos(angle) * size * 2 / 3, dY = y + Math.sin(angle) * size * 2 / 3;
  var eX = x + Math.cos(angle) * size, eY = y + Math.sin(angle) * size;

  c.strokeStyle = "black";
  c.beginPath();
  c.moveTo(aX, aY);
  c.lineTo(bX, bY);
  c.lineTo(cX, cY);
  c.lineTo(dX, dY);
  c.lineTo(eX, eY);
  c.stroke();
}

function strokeKoch(x, y, angle, size) {
  if (size <= 3) {
    strokeKochSide(x, y, angle, size);
  } else {
    var newAngle = angle + Math.PI * 5 / 3;
    var aX = x, aY = y;
    var bX = x + Math.cos(angle) * size / 3, bY = y + Math.sin(angle) * size / 3;
    var cX = bX + Math.cos(newAngle) * size / 3, cY = bY + Math.sin(newAngle) * size / 3;
    var dX = x + Math.cos(angle) * size * 2 / 3, dY = y + Math.sin(angle) * size * 2 / 3;
    strokeKoch(x, y, angle, size / 3);
    strokeKoch(bX, bY, newAngle, size / 3);
    strokeKoch(cX, cY, newAngle + Math.PI * 2 / 3, size / 3);
    strokeKoch(dX, dY, angle, size / 3);
  }
}

function drawKochSnowFlake(width, height) {
  c.clearRect(0, 0, width, height);
  var size = (width > height ? height : width) * 0.75;
  var w = width / 2;
  var h = height * 0.04;

  strokeKoch(w, h, Math.PI / 3, size);
  strokeKoch(w + Math.cos(Math.PI / 3) * size, h + Math.sin(Math.PI / 3) * size, Math.PI, size);
  strokeKoch(w - Math.cos(Math.PI / 3) * size, h + Math.sin(Math.PI / 3) * size, Math.PI * 5 / 3, size);
}
