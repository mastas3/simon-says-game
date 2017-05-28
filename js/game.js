var Game = function() {
  var buttonsHistory = [];
  var buttons = [new Button('blue', updateButtonsHistory), new Button('green', updateButtonsHistory), new Button('yellow', updateButtonsHistory), new Button('red', updateButtonsHistory)];
  var buttonsContainer = document.createElement('DIV');
  var ai = new AI(buttonsHistory, buttons);
  buttonsContainer.className = 'buttonsContainer';
  document.getElementById('app').appendChild(buttonsContainer);

  function updateButtonsHistory(color) {
    buttonsHistory.push(color);
  }

  //test:
  window.computersTurn = ai.play;

  function createButtons() {
    try {
      var controllers = document.createElement('controllers');
      controllers.className = 'controllers';
      buttonsContainer.appendChild(controllers);

      buttons.forEach(function(button) {
        buttonsContainer.appendChild(button.domElem());
      });      
      
      buttonsContainer.onclick = function() {
        console.log(buttonsHistory);
      }
      
    } catch (error) {
      console.log('createButtons: ' + error);
    }
  }

  this.init = function() {
    try {
      createButtons();
    } catch (error) {
      console.log('Game.init: ' + error);      
    }
  }
}