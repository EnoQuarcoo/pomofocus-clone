import React from "react";
import { useState } from 'react';

const Timer = () => {
  //State to remember which button has been clicken 
  const [mode, setMode] = useState("pomodoro");
  const [secondsLeft, setSecondsLeft] = useState(1500);

  function handlePomodoroMode() {
    setMode("pomodoro");
    setSecondsLeft(1500);
    console.log('Mode is pomo')
  }

  function handleShortMode() {
    setMode("short");
    setSecondsLeft(300);
    console.log('Mode is ', mode);
  }

  function handleLongMode() {
    setMode("long");
    setSecondsLeft(900); 
    console.log('Mode is long')
    
  }

  function convertSecondsToMinutes(totalseconds){
    const dateObj = new Date(totalseconds * 1000);
    const minutes = dateObj.getUTCMinutes();
    const seconds = dateObj.getSeconds(); 
    const timeString = minutes.toString() + ":" + seconds.toString().padStart(2, '0');
    return timeString;
  }




 

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
        <button> START </button>
      </div>
    </div>
  );
};

export default Timer;


//In react local variables don't persist between renders so if you want a componenet to remember something yuou give it a state. 
//Here are my steps. 
// 1. create a state timeleft 