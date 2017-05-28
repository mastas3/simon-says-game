var Button = function(_color, _updateHistoryArr) {
  try {
    var button = document.createElement('DIV');
    button.className = 'gameBtn';
    button.style.background = _color;
    
    var sound = new Sound(_color);

    button.onclick = function(_e) {
      try {
        _updateHistoryArr(this);
        sound.play();        
      } catch (error) {
        console.log('Button onclick: ' + error);
      }
    }

    this.domElem = function() {
      return button;
    }
  } catch (error) {
    console.log('Button constructor: ' + error);
  }
}