var Sound = function(soundCode) {
  try {
    var sound = document.createElement('audio');
    sound.src = 'sounds/'+soundCode+'.wav';
    sound.setAttribute('preload', 'auto');
    sound.setAttribute('controls', 'none');
    sound.style.display = 'none';
    document.body.appendChild(sound);

    this.play = function() {
      sound.play();
    }

    this.stop = function() {
      sound.pause();
    }      
  } catch (error) {
    console.log('Sound constructor: ' + error)
  }
}