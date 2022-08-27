//The code below loops through the number of buttons present on the webpage
//for each button it adds an event listener that makes an alert pop up when clicked
//the buttons are stored querySelectorAll node list the loop iterates through



for (let i = 0; i <= document.querySelectorAll(".drum").length; i++) {
 document.querySelectorAll("button")[i].addEventListener("click", function () {

   var buttonInnerHTML = this.innerHTML;

      switch (buttonInnerHTML) {

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

        default: console.log(buttonInnerHTML);

      }

 });
}


document.addEventListener("keypress", function() {
  alert("key was pressed");
});




//this.style.color = "white";
