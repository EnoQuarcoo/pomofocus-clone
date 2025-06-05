function timerFunction(){
    //we do not pass seconds as a p
    seconds -- ; 
    console.log(seconds + " seconds left");
    
    if (seconds === 0){
        clearInterval(intervalID)
    
    }

}

function setMode(mode){
    if (mode === "pomodoro"){
        seconds = 25 * 60;
    }else if (mode == "short"){
        seconds = 5 * 60;
    }else if (mode == "long"){
        seconds = 10 * 60;
    }
}

    
//Set mode
 


//get DOM element of start button
startButton = document.querySelector('#start-button')

//if start button is clicked
startButton.addEventListener("click", function(){
    console.log("startbutton clicked")
    
    const intervalID = setInterval(function(){timerFunction(seconds)}, 1000)
    
})