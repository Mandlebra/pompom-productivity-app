
// hide switch button
//find a way to go back to main

//hide navbar on break timer 

// hide stop button on breaktimer side
// make it a button that says "spend x breakpoints!"
// that turns into the timer when clicked and vice versa

//add stats to break screen

//turn off all button borders, make them highlight or change color instead

//disable switching screens while stopwatch is running

//all buttons shade on hover

import { TopNavStyle, BackButton, WorkToPlay, Naviga, Navigado, Stopwatch, ModBox, ModButton, ModButton0, ModButtonBP, ModButtonControl, BackImg } from './appStyles.jsx';

import buttonLogo from '/src/assets/backArrow.png';

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
      <MyNav
        mytime={mytime}
        setMyTime={setMyTime}
        style={style}
        changeStyle={changeStyle}
        breakearned={breakearned}
        setBreakEarned={setBreakEarned}
      />
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
          {!isRunning ? "Start" : hours + ":" + minutes + ":" + seconds}
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
        <p className={difficultyToggle == 1 ? 'light' : 'dark'}>Difficulty: </p>
        <ModButton className={difficultyToggle == 1 ? 'light' : 'dark'} onClick={!isRunning ? () => setDifficultyToggle(0) : () => (0)}>1/{mod}</ModButton>
      </WorkToPlay>


    </Stopwatch>


  );
}



function MyTimer({ expiryTimestamp, breakearned, setBreakEarned, style, setStyle, changeStyle, timerVis, setTimerVis, mytime, setMyTime }) {
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
      {/* <MyNav
        mytime={mytime}
        setMyTime={setMyTime}
        style={style}
        breakearned={breakearned}
        setBreakEarned={setBreakEarned}
      /> */}
      <BackButton className={style == "light" ? "dark" : "light"} onClick={changeStyle}> <BackImg src={buttonLogo} /></BackButton>
      <h1 style={{ paddingTop: "71px" }} className={style == "light" ? "dark" : "light"}>Break Timer</h1>
      <article>

        {/* <p className={timerVis == 0 ? "dark" : "light"}>{Math.floor(breakearned)} breakpoints earned!</p> */}
        {/* <p className={timerStyle}>{hours}:{minutes}:{seconds}</p> */}
        {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
        {/* <button onClick={start}>Start</button> */}
        {/* <button onClick={pause}>Pause</button> */}
        {/* <ModBox className={style == "light" ? "dark" : "light"}> */}
        {/* <ModButton className={style == "light" ? "dark" : "light"} onClick={resume}>Resume</ModButton> */}
        <ModButtonControl className={style == "light" ? "dark" : "light"} onClick={handleStartPause}>
          {isRunning ? hours + ":" + minutes + ":" + seconds : parseInt(breakearned) + " BP"}</ModButtonControl>
        {/* </ModBox> */}
      </article>
    </Stopwatch>
    // </div> 
  );
}

function MyNav({ mytime, style, changeStyle, setMyTime, breakearned, setBreakEarned }) {

  return (
    <>
      <Naviga>
        <Navigado>
          <p>
            Total: {Math.floor(mytime / 3600)}:{Math.floor((mytime % 3600) / 60)}:{Math.floor(mytime % 60)}
            {/* <ModButton className={style} onClick={() => setMyTime(0)}>Reset</ModButton> */}
          </p>
          <p>
            <ModButtonBP className={style} onClick={changeStyle}>
              Breakpoints: {parseInt(breakearned)}
            </ModButtonBP>
            {/*<ModButton className={style} onClick={() => setBreakEarned(0)}>Reset</ModButton> */}
          </p>
        </Navigado>
      </Naviga>
    </>
  );
}

function TopNav() {

  return (
    <>
      <TopNavStyle>
      {/* Michael */}
      </TopNavStyle>
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

  const changeStyle = () => {
    if (style !== "light") setStyle("light");
    else setStyle("dark");
    setTimerStyle("dark");
    setTimerVis(0);
  };
  // time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <>
      {/* <TopNav/> */}
      <MyStopwatch
        changeStyle={changeStyle}
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
        changeStyle={changeStyle}
        setStyle={setStyle}
        expiryTimestamp={time}
        breakearned={breakearned}
        setBreakEarned={setBreakEarned}
        timerVis={timerVis}
        setTimerVis={setTimerVis} />
    </>
  );
}