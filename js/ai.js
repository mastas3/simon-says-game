var AI = function(_buttonsHistory, _buttons) {
  this.play = function() {
    try {
      //computer chooses a new button
      var newButton = randomButton(_buttons);
      _buttonsHistory.push(newButton);
      console.log(_buttonsHistory)

      //iterate over all buttons (including the newest one)
      var calls = [];
      for(var i = 0; i < _buttonsHistory.length; i++) {
        var f = (function() {
          var j = i;
          return function() {
            if(_buttonsHistory[j-1]) _buttonsHistory[j-1].className = 'gameBtn'; 
            _buttonsHistory[j].onclick.call(_buttonsHistory[j]);
            _buttonsHistory[j].className = 'gameBtnActive';
          }
        })();
        calls.push(f)
      }
      var idx = 1;
      while(calls.length>=0) {
        var call = calls.shift();
        setTimeout(call, idx * 500);
        idx++;
      }
            
    } catch (error) {
      console.log('computersTurn:' + error)
    }
  }

  function randomButton(_arr) {
    return _arr[Math.floor(Math.random() * _arr.length)].domElem();
  }
}