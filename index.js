let btn = document.querySelectorAll(".drum");

for (i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    s = this.innerHTML;
    console.log(s);
    var audio = new Audio(`sounds/${s}.mp3`);
    audio.play();
  };

  document.addEventListener("keypress", function (e) {
    s = e.key;
    var audio = new Audio(`sounds/${s}.mp3`);
    audio.play();
  });
}



