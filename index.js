//The code below loops through the number of buttons present on the webpage
//for each button it adds an event listener that makes an alert pop up when clicked
//the buttons are stored querySelectorAll node list the loop iterates through



for (let i = 0; i <= document.querySelectorAll(".drum").length; i++) {
 document.querySelectorAll("button")[i].addEventListener("click", function () {
this.style.color = "white";
 });
}







//var song = new Audio("sounds/tom-1.mp3");
//song.play();
