var canvas, c, cw, ch;

window.onload = window.onresize = function() {
  canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  cw = window.innerWidth;;
  canvas.height = window.innerHeight;
  ch = window.innerHeight;
  c = canvas.getContext("2d");
  drawSierpinskiTriangle(cw, ch);
}
