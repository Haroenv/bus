---
# comment for jekyll
---

var notification = document.createElement('audio');
notification.src = '{{site.url}}/src/notification.mp3'

var stopButton = document.getElementsByClassName('tracker__stop')[0];
if (stopButton) {
  stopButton.addEventListener('click',function(){
    pressButton();
  });
};

var pressButton = function() {
  stopButton.classList.add('tracker__stop--enquired');
  stopButton.disabled = true;
  notification.play();
}

// if stop has passed: stop being enquired
var resetButton = function() {
  stopButton.classList.remove('tracker__stop--enquired');
  stopButton.disabled = false;
}
