var Button = function(color) {
  var button = document.createElement('DIV');
  button.className = 'gameBtn';
  button.style.background = color;

  this.domElem = function() {
    return button;
  }
}