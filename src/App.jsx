//show visual indicator that you cant use buttons(greyed out?)

//add shop button to stopwatch fixed position, ignore nav

//save user profiles, login

//cookies to keep timer data when computer closes/refreshes?
//might be a local server issue
//test on pc

//add stats to break screen

//color back button

//add question mark for how-to guide
//picture with text boxes?
//new screen with text. explain concept & execution

import { TopNavStyle, BackButton, WorkToPlay, Naviga, Navigado, Stopwatch, ModBox, ModButton, ModButton0, ModButtonBP, ModButtonControl, BackImg } from './appStyles.jsx';

import buttonLogo from '/src/assets/backArrow.png';

import React, { useState, useCallback, useEffect } from 'react';
import { useStopwatch, useTimer } from 'react-timer-hook';

Number.prototype.zeroPad = function () {
  return ('0' + this).slice(-2);
};

function MyStopwatch({ breakearned, setBreakEarned, style, setStyle, timerVis, setTimerVis, mytime, setMyTime, difficultyToggle, setDifficultyToggle, globalRunning, setGlobalRunning }) {

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
    setGlobalRunning(false);
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
      setGlobalRunning(true);
    }
  }, [isRunning, start, pause]);

  //for mod button background color

  const handleMod = useCallback((x) => {
    setDifficultyToggle(1);
    setModifier(x);


  }, [totalSeconds, mod]);


  return (
    <Stopwatch className={style}>
      <BackButton className={difficultyToggle == 0 ? 'light' : 'dark'} onClick={() => setDifficultyToggle(1)}> <BackImg src={buttonLogo} /></BackButton>
      <MyNav
        mytime={mytime}
        setMyTime={setMyTime}
        style={style}
        changeStyle={changeStyle}
        breakearned={breakearned}
        setBreakEarned={setBreakEarned}
        difficultyToggle={difficultyToggle} 
        globalRunning={globalRunning}
        setGlobalRunning={setGlobalRunning}
      />
      <h1 style={{ color: "#dadada", marginBottom: "12px" }} className={style}>
        {difficultyToggle == 1 ? "Mongo Timer" : ""}
      </h1>
      <article className={difficultyToggle == 1 ? 'light' : 'dark'}>
        {/* <p>Current Session</p> */}
        {/* <p className={style}>
          {hours}:{minutes}:{seconds}
        </p> */}
        {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
        <ModButtonControl className={style} onClick={handleStartPause}>
          {!isRunning ? "Start" : hours.zeroPad() + ":" + minutes.zeroPad() + ":" + seconds.zeroPad()}
          {/* {hours}:{minutes}:{seconds} */}
        </ModButtonControl>
        {/* <ModButtonControl className={style} onClick={((totalSeconds > 0) || (isRunning && totalSeconds == 0)) ? handleReset : () => (0)}>
          Finish
        </ModButtonControl> */}
      </article>
      <WorkToPlay>
        <p style={{ color: "#dadada" }} className={difficultyToggle == 1 ? 'light' : 'dark'}>Difficulty: </p>
        <ModButton className={difficultyToggle == 1 ? 'light' : 'dark'} onClick={!isRunning ? () => setDifficultyToggle(0) : () => (0)}>1/{mod}</ModButton>
      </WorkToPlay>

      <ModBox className={style}>
        <ModButton0 className={difficultyToggle == 0 ? 'light' : 'dark'} onClick={((totalSeconds > 0) || (isRunning && totalSeconds == 0)) ? () => (0) : () => handleMod(1)}>Very Easy &nbsp;[1/1]</ModButton0>
        <ModButton0 className={difficultyToggle == 0 ? 'light' : 'dark'} onClick={((totalSeconds > 0) || (isRunning && totalSeconds == 0)) ? () => (0) : () => handleMod(2)}>Easy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1/2]</ModButton0>
        <ModButton0 className={difficultyToggle == 0 ? 'light' : 'dark'} onClick={((totalSeconds > 0) || (isRunning && totalSeconds == 0)) ? () => (0) : () => handleMod(3)}>Medium &nbsp;&nbsp;&nbsp; [1/3]</ModButton0>
        <ModButton0 className={difficultyToggle == 0 ? 'light' : 'dark'} onClick={((totalSeconds > 0) || (isRunning && totalSeconds == 0)) ? () => (0) : () => handleMod(4)}>Hard &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1/4]</ModButton0>
      </ModBox>




    </Stopwatch>


  );
}



function MyTimer({ expiryTimestamp, breakearned, setBreakEarned, style, setStyle, changeStyle, timerVis, setTimerVis, mytime, setMyTime, globalRunning, setGlobalRunning }) {
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
      <BackButton className={style == "light" ? "dark" : "light"} onClick={!isRunning ? () => changeStyle() : () => (0)}> <BackImg src={buttonLogo} /></BackButton>
      <h1 style={{ color: "#dadada", paddingTop: "71px", marginBottom: "12px" }} className={style == "light" ? "dark" : "light"}>Break Timer</h1>
      <article>

        {/* <p className={timerVis == 0 ? "dark" : "light"}>{Math.floor(breakearned)} breakpoints earned!</p> */}
        {/* <p className={timerStyle}>{hours}:{minutes}:{seconds}</p> */}
        {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
        {/* <button onClick={start}>Start</button> */}
        {/* <button onClick={pause}>Pause</button> */}
        {/* <ModBox className={style == "light" ? "dark" : "light"}> */}
        {/* <ModButton className={style == "light" ? "dark" : "light"} onClick={resume}>Resume</ModButton> */}
        <ModButtonControl className={style == "light" ? "dark" : "light"} onClick={handleStartPause}>
          {isRunning ? hours.zeroPad() + ":" + minutes.zeroPad() + ":" + seconds.zeroPad() : parseInt(breakearned) + " BP"}</ModButtonControl>
        {/* </ModBox> */}
      </article>
    </Stopwatch>
    // </div> 
  );
}

function MyNav({ mytime, style, changeStyle, setMyTime, breakearned, setBreakEarned, difficultyToggle, globalRunning }) {

  return (
    <>
      <Naviga>
        <div className={difficultyToggle == 1 ? 'light' : 'dark'}>
          <Navigado>
            <p>
              Total: {Math.floor(mytime / 3600)}h {Math.floor((mytime % 3600) / 60)}m {Math.floor(mytime % 60)}s
              {/* <ModButton className={style} onClick={() => setMyTime(0)}>Reset</ModButton> */}
            </p>
            <p>
              <ModButtonBP className={style} onClick={globalRunning == false ? () => changeStyle() : () => (0)}>
                Breakpoints: {parseInt(breakearned)}
              </ModButtonBP>
              {/*<ModButton className={style} onClick={() => setBreakEarned(0)}>Reset</ModButton> */}
            </p>
          </Navigado>
        </div>
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

export default function App() 
{


  const [breakearned, setBreakEarned] = useState(0);
  const [style, setStyle] = useState("light");
  const [timerVis, setTimerVis] = useState(0);
  const [difficultyToggle, setDifficultyToggle] = useState(1);
  const [mytime, setMyTime] = useState(0);
  const [globalRunning, setGlobalRunning] = useState(false);


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
        globalRunning={globalRunning}
        setGlobalRunning={setGlobalRunning}
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
        setTimerVis={setTimerVis}
        globalRunning={globalRunning}
        setGlobalRunning={setGlobalRunning}
      />
    </>
  );
}