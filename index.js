
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


  //this is a callback function which means when eventlistener is called it also calls the
  //details of the event that triggers it meaning we can then access those details this includes the
  //key that is pressed when the pass this key into two other functions as arguements
  document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);
  });

}
//this is a switch function that switches on an input called key that takes its variable
//from either the event listener for clicks or keypresses in either case it will only
//play sound if certain keys are pressed.in this case key is the arguement of the function
//but the arguement can have a permeter of ant name passed into it.
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
      console.log(key);

  }
}

function buttonAnimation(currentKey){
//this takes an arguement in ther form off either the inner html of a button click or the value of a keydown
//it then uses a querySelector with a the value passed into the function concated with a dot and stores it as variable
//this means the variable stored is now equal to a class of a specific button based on what the user has inputted
// it then adds the pressed css class to the classlist of the element we have stored
// then it uses a setTimeout function to wait 100 milliseconds and then removes the pressed class from the classlist
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 100);
}
