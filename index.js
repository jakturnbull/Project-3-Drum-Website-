
//loops through all the elements in the html associated with the drum css class and then
//listens to see if one of them clicked and will then calls makeSound function with innerHTML text as the permeter
for (let i = 0; i <= document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);


  });

  //dettects keyboard strokes and then calls the function that makes drum sounds with key as perameter of that function
  //this also loops through each of the elements to check against the keys pressed matching one of the switch statements

  document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);
  });

}

function makeSound(key) {
  switch (key) {

    case "w":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "a":
      var kick_bass = new Audio("sounds/kick_bass.mp3");
      kick_bass.play();
      break;

    case "s":
      var tom1 = new Audio("sounds/tom_1.mp3");
      tom1.play();
      break;

    case "d":
      var tom2 = new Audio("sounds/tom_2.mp3");
      tom2.play();
      break;

    case "j":
      var tom3 = new Audio("sounds/tom_3.mp3");
      tom3.play();
      break;

    case "k":
      var song = new Audio("sounds/tom_4.mp3");
      song.play();
      break;

    case "l":
      var song = new Audio("sounds/crash.mp3");
      song.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 100);
}
