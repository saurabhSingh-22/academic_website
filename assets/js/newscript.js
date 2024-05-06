
// var i = 0;
// var txt = document.getElementById('typingtext').innerHTML;
// var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("showtext").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// typeWriter();

// sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "380px";
  document.getElementById("sidelayer").style.opacity = 1;
  document.getElementById("body").style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("sidelayer").style.opacity = 0;
  document.getElementById("body").style.overflow = "auto";
}



document.addEventListener('DOMContentLoaded', function () {
  var btns = document.querySelectorAll('.btn');
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      this.classList.toggle('active');
      this.classList.toggle('not-active');
    });
  });
});