// add 'choose difficulty' above ModBox
// hide switch button, look at pomodoro for influence?
// hide stop button on breaktimer side
  // make it a button that says "spend x breakpoints!"
  // that turns into the timer when clicked and vice versa
//get body to extend to bottom of screen
//should be a box around difficulty & timer, same size
  // for both
//bring total down inside stopwatch box smaller text

import {WorkToPlay, Naviga, Navigado, Stopwatch, ModBox, ModButton, ModButton0, ModButtonControl } from './appStyles.jsx';

import React, { useState, useCallback, useEffect } from 'react';
import { useStopwatch, useTimer } from 'react-timer-hook';



function MyStopwatch({ breakearned, setBreakEarned, style, setStyle, timerVis, setTimerVis, mytime, setMyTime, difficultyToggle, setDifficultyToggle }) {

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

  const [mod, setModifier] = useState(3);

  const handleReset = useCallback(() => {
    setBreakEarned(breakearned + (totalSeconds / mod));
    setMyTime(mytime + totalSeconds);
    reset(0, false);
  }, [isRunning, reset, mytime, totalSeconds, breakearned]);

  const changeStyle = () => {
    if (style !== "light") setStyle("light");
    else setStyle("dark");
    setTimerVis(1);
  };

  const handleStartPause = useCallback(() => {
    if (isRunning) {
      handleReset();
    } else {
      start();
    }
  }, [isRunning, start, pause]);

  //for mod button background color

  const handleMod = useCallback((x) => {
    setDifficultyToggle(1);
    setModifier(x);


  }, [totalSeconds, mod]);


  return (
    <Stopwatch className={style}>
      <ModButton className={style} onClick={changeStyle}>
        Switch
      </ModButton>
      <h1 className={style}>
        Mango Timer
      </h1>
      <article className={difficultyToggle == 1 ? 'light' : 'dark'}>
        {/* <p>Current Session</p> */}
        {/* <p className={style}>
          {hours}:{minutes}:{seconds}
        </p> */}
        {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
        <ModButtonControl className={style} onClick={handleStartPause}>
          {!isRunning ? "Start" : hours + ":" + minutes + ":" + seconds }
        {/* {hours}:{minutes}:{seconds} */}
        </ModButtonControl>
        {/* <ModButtonControl className={style} onClick={((totalSeconds > 0) || (isRunning && totalSeconds == 0)) ? handleReset : () => (0)}>
          Finish
        </ModButtonControl> */}
      </article>

      
      <ModBox className={style}>
        <ModButton0 className={difficultyToggle == 0 ? 'light' : 'dark'} onClick={((totalSeconds > 0) || (isRunning && totalSeconds == 0)) ? () => (0) : () => handleMod(1)}>Very Easy</ModButton0>
        <ModButton0 className={difficultyToggle == 0 ? 'light' : 'dark'} onClick={((totalSeconds > 0) || (isRunning && totalSeconds == 0)) ? () => (0) : () => handleMod(2)}>Easy</ModButton0>
        <ModButton0 className={difficultyToggle == 0 ? 'light' : 'dark'} onClick={((totalSeconds > 0) || (isRunning && totalSeconds == 0)) ? () => (0) : () => handleMod(3)}>Medium</ModButton0>
        <ModButton0 className={difficultyToggle == 0 ? 'light' : 'dark'} onClick={((totalSeconds > 0) || (isRunning && totalSeconds == 0)) ? () => (0) : () => handleMod(4)}>Hard</ModButton0>
      </ModBox>

      <WorkToPlay>
      <p className={style}>Work to Play: </p>
      <ModButton onClick={!isRunning? () => setDifficultyToggle(0): ()=>(0)}>1/{mod}</ModButton>
      </WorkToPlay>


    </Stopwatch>


  );
}



function MyTimer({ expiryTimestamp, breakearned, setBreakEarned, style, setStyle, timerVis, setTimerVis, mytime, setMyTime }) {
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
  } = useTimer({ autoStart: false, expiryTimestamp, onExpire: () => { alert('Timer Expired'); setBreakEarned(0); setTimerStyle("dark"); setTimerVis(1) } });


  const [timerStyle, setTimerStyle] = useState("dark");
  const [timerTextStyle, setTimerTextStyle] = useState("dark");

  const handleReset = useCallback(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + breakearned);
    restart(time);
    changeTimerStyle();
    setTimerVis(0);
  }, [breakearned, isRunning, totalSeconds, start, pause]);

  const changeStyle = () => {
    if (style !== "light") setStyle("light");
    else setStyle("dark");
    setTimerStyle("dark");
    setTimerVis(0);
  };
  const changeTimerStyle = () => {
    setTimerStyle("light");
  };
  const handleStartPause = useCallback(() => {
    if (isRunning) {
      setTimerStyle("dark");
      pause();
      setBreakEarned(totalSeconds);
      setTimerVis(1);
    } else {
      handleReset();
    }
  }, [isRunning, start, pause, totalSeconds, breakearned]);

  return (
    // <div style={{ textAlign: 'center' }}>
    // <h1>react-timer-hook </h1>
    // <p>Timer Demo</p>

    <Stopwatch className={style == "light" ? "dark" : "light"}>
      <ModButton className={style == "light" ? "dark" : "light"} onClick={changeStyle}>Switch </ModButton>
      <h1 className={style == "light" ? "dark" : "light"}>Break Timer</h1>
      <article>

        <p className={timerVis == 0 ? "dark" : "light"}>{Math.floor(breakearned)} breakpoints earned!</p>
        <p className={timerStyle}>{hours}:{minutes}:{seconds}</p>
        {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
        {/* <button onClick={start}>Start</button> */}
        {/* <button onClick={pause}>Pause</button> */}
        {/* <ModBox className={style == "light" ? "dark" : "light"}> */}
        {/* <ModButton className={style == "light" ? "dark" : "light"} onClick={resume}>Resume</ModButton> */}
        <ModButton className={style == "light" ? "dark" : "light"} onClick={handleStartPause}>
          {isRunning ? 'Stop' : 'Spend'}</ModButton>
        {/* </ModBox> */}
      </article>
    </Stopwatch>
    // </div> 
  );
}

function MyNav({ mytime, style, setMyTime, breakearned, setBreakEarned }) {

  return (
    <>
      <Naviga>
        <Navigado>
          <p>
            Total: {Math.floor(mytime / 3600)}:{Math.floor((mytime % 3600) / 60)}:{Math.floor(mytime % 60)}
            {/* <ModButton className={style} onClick={() => setMyTime(0)}>Reset</ModButton> */}
          </p>
          <p>
            Breakpoints: {parseInt(breakearned)}{/*<ModButton className={style} onClick={() => setBreakEarned(0)}>Reset</ModButton> */}
          </p>
        </Navigado>
      </Naviga>
    </>
  );
}

export default function App() {


  const [breakearned, setBreakEarned] = useState(0);
  const [style, setStyle] = useState("light");
  const [timerVis, setTimerVis] = useState(0);
  const [difficultyToggle, setDifficultyToggle] = useState(1);
  const [mytime, setMyTime] = useState(0);

  const time = new Date();
  // time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <>
      <MyNav
        mytime={mytime}
        setMyTime={setMyTime}
        style={style}
        breakearned={breakearned}
        setBreakEarned={setBreakEarned}
      />
      <MyStopwatch
        mytime={mytime}
        setMyTime={setMyTime}
        style={style}
        setStyle={setStyle}
        breakearned={breakearned}
        setBreakEarned={setBreakEarned}
        timerVis={timerVis}
        setTimerVis={setTimerVis}
        difficultyToggle={difficultyToggle}
        setDifficultyToggle={setDifficultyToggle}
      />
      <MyTimer
        mytime={mytime}
        setMyTime={setMyTime}
        style={style}
        setStyle={setStyle}
        expiryTimestamp={time}
        breakearned={breakearned}
        setBreakEarned={setBreakEarned}
        timerVis={timerVis}
        setTimerVis={setTimerVis} />
    </>
  );
}