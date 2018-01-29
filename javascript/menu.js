var makeButtonActive = function(event) {
  event = event || window.event;
  var target = event.target || event.srcElement;

  var menuItems = document.getElementsByClassName("menuItem");
  for (var i = 0; i < menuItems.length; i++) {
    if (menuItems[menuItems.length - 1].id === target.id) {
      document.getElementById("canvas").style.display = "none";
      document.getElementById("fractals").style.display = "block";
    } else {
      document.getElementById("canvas").style.display = "block";
      document.getElementById("fractals").style.display = "none";
    }
    if (menuItems[i].id === target.id) {
      menuItems[i].className = "menuItem active";
    } else {
      menuItems[i].className = "menuItem";
    }
  }
}

var bindEvent = function(element, type, handler) {
  if (element.addEventListener) {
    element.addEventListener(type, handler, false);
  } else {
    element.attachEvent('on' + type, handler);
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  var menuItems = document.getElementsByClassName("menuItem");
  for (var i = 0; i < menuItems.length; i++) {
    bindEvent(menuItems[i], "click", makeButtonActive);
  }
});
