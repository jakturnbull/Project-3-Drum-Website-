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
              var kick-bass = new Audio("sounds/kick-bass.mp3");
              kick-bass.play();
            break;

            case "s":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
              break;

              case "d":
                  var tom2 = new Audio("sounds/tom-2.mp3");
                  tom2.play();
                break;

                case "j":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                  break;

                  case "k":
                      var song = new Audio("sounds/tom-4.mp3");
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







//var song = new Audio("sounds/tom-1.mp3");
//song.play();
//this.style.color = "white";
