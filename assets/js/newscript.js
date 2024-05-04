
var i = 0;
var txt = document.getElementById('typingtext').innerHTML;
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("showtext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();