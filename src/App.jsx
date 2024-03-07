import { Stopwatch, ModBox, ModButton, ModButtonControl } from './appStyles.jsx';

import React, { useState, useCallback, useEffect } from 'react';
import { useStopwatch, useTimer } from 'react-timer-hook';



function MyStopwatch({breakearned, setBreakEarned}) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  const [mytime, setMyTime] = useState(0);
  const [mod, setModifier] = useState(1);

  const handleReset = useCallback(() => {
    setBreakEarned(breakearned + (totalSeconds / mod));
    setMyTime(mytime + totalSeconds);
    reset(0, false);
  }, [isRunning, reset, mytime, totalSeconds, breakearned]);


  const handleStartPause = useCallback(() => {
    if (isRunning) {
      // setMyTime(mytime + totalSeconds);
      pause();
    } else {
      // setMyTime(mytime - totalSeconds);
      start();
    }
  }, [isRunning, start, pause]);

  //for mod button background color

  const handleMod = useCallback((x) => {
    setModifier(x);


  }, [totalSeconds, mod]);


  return (
    <Stopwatch>
      <article>
        <h1>Mango Timer</h1>
        {/* <p>Current Session</p> */}
        <p>
          {days}:{hours}:{minutes}:{seconds}
        </p>
        {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
        <ModButtonControl onClick={handleStartPause}>{isRunning ? 'Pause' : 'Start'}</ModButtonControl>
        <ModButtonControl onClick={((totalSeconds > 0) || (isRunning && totalSeconds == 0)) ? handleReset : () => (0)}>Finish</ModButtonControl>


      </article>
      <p>Work to Play: 1/{mod}</p>
      <ModBox>
        <ModButton onClick={((totalSeconds > 0) || (isRunning && totalSeconds == 0)) ? () => (0) : () => handleMod(1)}>Easy</ModButton>
        <ModButton onClick={((totalSeconds > 0) || (isRunning && totalSeconds == 0)) ? () => (0) : () => handleMod(2)}>Medium</ModButton>
        <ModButton onClick={((totalSeconds > 0) || (isRunning && totalSeconds == 0)) ? () => (0) : () => handleMod(3)}>Hard</ModButton>
        <ModButton onClick={((totalSeconds > 0) || (isRunning && totalSeconds == 0)) ? () => (0) : () => handleMod(4)}>Very Hard</ModButton>
      </ModBox>
      <p>
        Total Time (seconds): {mytime}
        <ModButton onClick={() => setMyTime(0)}>Reset</ModButton>
      </p>
      <p>
        Break Earned (seconds): {parseInt(breakearned)}<ModButton onClick={() => setBreakEarned(0)}>Reset</ModButton>
      </p>

    </Stopwatch>


  );
}



function MyTimer({ expiryTimestamp, breakearned, setBreakEarned }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  const handleReset = useCallback(() => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + breakearned);
        restart(time);
  }, [totalSeconds]);

  return (
    // <div style={{ textAlign: 'center' }}>
      // <h1>react-timer-hook </h1>
      // <p>Timer Demo</p>
      <>
      <div style={{ fontSize: '100px' }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button> */}
      <button onClick={handleReset}>Restart</button>
      </>
    // </div> 
  );
}


export default function App() {

  const [breakearned, setBreakEarned] = useState(0);
  const time = new Date();
  // time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <>

      <MyStopwatch breakearned = {breakearned} setBreakEarned = {setBreakEarned}/>
      <MyTimer expiryTimestamp={time} breakearned = {breakearned} setBreakEarned = {setBreakEarned}/>
    </>
  );
}