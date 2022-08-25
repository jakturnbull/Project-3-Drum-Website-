//The code below loops through the number of buttons present on the webpage
//for each button it adds an event listener that makes an alert pop up when clicked
//the buttons are stored querySelectorAll node list the loop iterates through this list

for (let i = 0; i <= document.querySelectorAll(".drum").length; i++) {
 document.querySelectorAll("button")[i].addEventListener("click", function () {
   var audio = new audio('sounds/crash.mp3');
   audio.play();
   console.log("iamsam");
 });
}
