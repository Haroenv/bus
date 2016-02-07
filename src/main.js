---
# comment for jekyll
---

var notification = document.createElement('audio');
notification.src = 'src/notification.mp3'

var stopButton = document.getElementsByClassName('tracker__stop')[0];
stopButton.addEventListener('click',function(){
  this.classList.toggle('tracker__stop--enquired');
  // play sound
  notification.play();
});
