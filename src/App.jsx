// import { useState } from 'react'

// const App = () => {
//   const [ date, setCounter ] = useState(0)

//   setTimeout(
//     () => setCounter(date + 1),
//     1000
//   )

//   return (
//     <div>{date}</div>
//   )
// }

// export default App

import React, { useState, useCallback } from 'react';
import { useStopwatch } from 'react-timer-hook';



function MyStopwatch() {
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

  const handleReset = useCallback(() => 
    {
      setMyTime(mytime + totalSeconds);
      reset(0, false);
    }, [isRunning, reset]);

  const handleStartPause = useCallback(() => {
    if (isRunning) {
      // setMyTime(mytime + totalSeconds);
      pause();
    } else {
      // setMyTime(mytime - totalSeconds);
      start();
    }
  }, [isRunning, start, pause]);



  return (
    <main style={{textAlign: 'center'}}>
      <h1>react-timer-hook</h1>
      <p>Stopwatch Demo</p>
      <section style={{fontSize: '100px'}}>
        {days}:{hours}:{minutes}:{seconds}  
      </section>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={handleStartPause}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={handleReset}>Finish</button>
      <p>Total Time (seconds): {mytime}</p>
    </main>
  );
}

export default function App() {
  return (
      <MyStopwatch />
  );
}