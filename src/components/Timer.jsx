import React from "react";
import { useState } from 'react';

const Timer = () => {
  //State to remember which button has been clicken 
  const [mode, setMode] = useState("pomodoro");

  function handlePomodoroMode() {
    setMode("pomodoro");
    console.log('Mode is pomo')
  }

  function handleShortMode() {
    setMode("short");
    console.log('Mode is ', mode)
  }

  function handleLongMode() {
    setMode("long");
    console.log('Mode is long')
    
  }


 

  return (
    <div className="timer-section">
      <div className="pomo-titles">
        <button className={mode==="pomodoro" ? "pomodoro-btn clicked" : "pomodoro-btn" } onClick={handlePomodoroMode}> Pomodoro</button>
        <button className={mode==="short" ? "short-btn clicked" : "short-btn"} onClick={handleShortMode}>Short break </button>
        <button className={mode==="long"? "long-btn clicked" : "long-btn"} onClick={handleLongMode}>Long break </button>
      </div>
      <div className="timer">
        <h1>25:00</h1>
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
// 1. I define useState and set its initial value to the string pomodoro 
// I create a function (handleModeSwitch) to help it switch between the different mode options ("pomodoro", "long", 'short')
