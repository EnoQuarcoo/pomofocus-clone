let mode = null
console.log("mode is ", mode);
let seconds = 25  * 60; //Default seconds
console.log("seconds is", seconds);
let intervalID; //global variable so the timer function can access it. 


function timerFunction(){
    seconds -- ; 
    console.log(seconds + " seconds left");
    startButton.textContent = "Running"
    
    if (seconds === 0){
        clearInterval(intervalID)
        console.log("bell ring! timer up! ")
    }

}

//Tells us how many seconds each timer should have. 
function setMode(mode){
    if (mode === "pomodoro"){
        //seconds = 25 * 60;
        seconds = 0.05 * 60;
    }else if (mode === "short"){
        seconds = 5 * 60;
    }else if (mode === "long"){
        seconds = 15 * 60;
    }
}

//Adds clicked effect to selected button 
function clickedEffect(button){
    //first remove the clicked effect from all other buttons
    //secondly add clicked effect to the new button
    const titleButtons = document.querySelectorAll("#pomotitle button");
    titleButtons.forEach(titleButton, function(){
        titleButton.classList.remove("clicked"); 
    });

    button.classList.add("clicked");


}


//Set mode
const pomodoroButton = document.querySelector("#pomodoro-btn");
const shortButton = document.querySelector("#short-btn");
const longButton = document.querySelector("#long-btn");
 
pomodoroButton.addEventListener("click", function(){
    mode = "pomodoro";
    setMode(mode)
    console.log("mode is ", mode);
    console.log(seconds);
    //add clicked effect
    pomodoroButton.classList.add("clicked");
});

shortButton.addEventListener("click", function(){
    mode = "short";
    setMode(mode)
    console.log("mode is ", mode);
    console.log(seconds);
    shortButton.classList.add("clicked");
});

longButton.addEventListener("click", function(){
    mode = "long";
    setMode(mode)
    console.log("mode is ", mode);
    longButton.classList.add("clicked");
});




//get DOM element of start button
startButton = document.querySelector('#start-button');
//if start button is clicked
startButton.addEventListener("click", function(){
    console.log("startbutton clicked")
    intervalID = setInterval(function(){timerFunction()}, 1000)
});




const titleButtons = document.querySelectorAll("#pomo-titles button");

titleButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    console.log("You clicked ", button);

    // Remove .clicked from all buttons
    titleButtons.forEach(function(btn) {
      btn.classList.remove("clicked");
    });

    // Add .clicked to the one that was clicked
    button.classList.add("clicked");
  });
});
