for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("/18.0 Drum Kit Starting Files/sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("/18.0 Drum Kit Starting Files/sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("/18.0 Drum Kit Starting Files/sounds/tom-2.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("/18.0 Drum Kit Starting Files/sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("/18.0 Drum Kit Starting Files/sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("/18.0 Drum Kit Starting Files/sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio(
        "/18.0 Drum Kit Starting Files/sounds/kick-bass.mp3"
      );
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}