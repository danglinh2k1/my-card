var switchButton = document.getElementById("cb4");
var switchOuter = document.getElementById("outer");
var buttons = document.getElementsByClassName("button");

function toggleClasses() {
  console.log(this.buttons);
  if (this.switchButton.checked == false) {
    this.switchOuter.classList.add("weird-move");
    for (i = 0; i < this.buttons.length; i++) {
      this.buttons[i].classList.add("glow");
    }
  } else {
    this.switchOuter.classList.remove("weird-move");
    for (i = 0; i < this.buttons.length; i++) {
      this.buttons[i].classList.remove("glow");
    }
  }
}