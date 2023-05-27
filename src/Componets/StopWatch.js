import React, { useEffect, useState } from 'react'

function StopWatch(props) {

    let time = props.time;
    let setTime  = props.setTime;
    const isRunning = props.isRunning;
    const setIsRunning = props.setIsRunning;
  // state to check stopwatch running or not
  

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  

  return (
    <div className='time font'>
      
        <span>Time:</span>
        <span>{hours}:</span>
        <span>{minutes}:</span>
        <span>{seconds}:</span>
        <span>{milliseconds}</span>

    </div>
  )
}

export default StopWatch
