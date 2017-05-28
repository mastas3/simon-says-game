var Button = function(_color, _updateHistoryArr) {
  try {
    var button = document.createElement('DIV');
    button.className = 'gameBtn';
    button.style.background = _color;
    button.id = Date.now();
    var sound = new Sound(_color);

    button.onclick = function(_e) {
      try {
        sound.play(); 
        if(_e) { //if event comes from the user - update history (computer updates history by itself)
          _updateHistoryArr(this);
        }
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