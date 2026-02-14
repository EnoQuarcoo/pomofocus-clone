import React from "react";
import { useState } from 'react';

const Timer = () => {
  //Mode tells which timer the user selected - pomodoro, long or short 
  const [mode, setMode] = useState("pomodoro"); 
  //Calculae the seconds left based on the selected mode
  const [secondsLeft, setSecondsLeft] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);

  function handlePomodoroMode() {
    setMode("pomodoro");
    setSecondsLeft(1500);
    setIsRunning(false);
    console.log('Mode is pomo')
  }

  function handleShortMode() {
    setMode("short");
    setSecondsLeft(300);
    setIsRunning(false);
    console.log('Mode is ', mode);
  }

  function handleLongMode() {
    setMode("long");
    setSecondsLeft(900); 
    setIsRunning(false);
    console.log('Mode is long')
    
  }

  function convertSecondsToMinutes(totalseconds){
    const dateObj = new Date(totalseconds * 1000);
    const minutes = dateObj.getUTCMinutes();
    const seconds = dateObj.getSeconds(); 
    const timeString = minutes.toString() + ":" + seconds.toString().padStart(2, '0');
    return timeString;
  }

  function decreaseTime(previous){
    return previous - 1
  }
  function startTimer(){
    setIsRunning(true);
    setInterval(setSecondsLeft(decreaseTime), 1000);
    console.log("time left is ", convertSecondsToMinutes(secondsLeft) )
  }

  //Every second, reduce the number of seconds left. 



  return (
    <div className="timer-section">
      <div className="pomo-titles">
        <button className={mode==="pomodoro" ? "pomodoro-btn clicked" : "pomodoro-btn" } onClick={handlePomodoroMode}> Pomodoro</button>
        <button className={mode==="short" ? "short-btn clicked" : "short-btn"} onClick={handleShortMode}>Short break </button>
        <button className={mode==="long"? "long-btn clicked" : "long-btn"} onClick={handleLongMode}>Long break </button>
      </div>
      <div className="timer">
        <h1>{convertSecondsToMinutes(secondsLeft)}</h1>
      </div>
      <div className="start-button" >
        <button onClick={startTimer}> {isRunning ? <>PAUSE </>: <>START </>} </button>
      </div>
    </div>
  );
};

export default Timer;


//In react local variables don't persist between renders so if you want a componenet to remember something yuou give it a state. 
//Here are my steps. 
// 1. create a state timeleft 