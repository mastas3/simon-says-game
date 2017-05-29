var AI = function(_buttonsHistory, _buttons) {
  this.play = function() {
    try {
      var newButton = randomButton(_buttons);
      _buttonsHistory.push(newButton);

      //iterate over all buttons (including the newest one)
      var calls = [];
      for(var i = 0; i < _buttonsHistory.length; i++) {
        var f = (function() {
          var j = i;
          return function() {
            if(_buttonsHistory[j-1]) _buttonsHistory[j-1].className = 'gameBtn'; 
            _buttonsHistory[j].onclick.apply(_buttonsHistory[j]);
            _buttonsHistory[j].className = 'gameBtnActive';
          };
        })();
        calls.push(f)
      };

      var promise = new Promise(function(resolvePromise, rejectPromise) {
        renderCalls(calls);
        if(calls.length===0) {
          resolvePromise(_buttons)
        } else {
          rejectPromise(Error('Promise error'))
        };
      });

      promise.then(function(result) {

      }, function(error) {
        console.log('There was an error: ' + error)
      });

    } catch (error) {
      console.log('ai.play: ' + error);
    };
  };

  function renderCalls(calls) {
    var idx = 1;
    while(calls.length>0) {
      var call = calls.shift();
      setTimeout(call, idx * 500);
      idx++;
    }
  }

  function randomButton(_arr) {
    return _arr[Math.floor(Math.random() * _arr.length)].domElem();
  }
}