---
# comment for jekyll
---

var stopButton = document.getElementsByClassName('tracker__stop')[0];
stopButton.addEventListener('click',function(){
  this.classList.toggle('tracker__stop--enquired');
});
