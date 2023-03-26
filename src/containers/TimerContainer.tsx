import { useContext, useEffect, useRef, useState } from "react";
import { ActionTypes } from "../actions/ClockActions";
import ClockContext from "../context/ClcckContext";

const TimerContainer = () => {
  const { state, dispatch } = useContext(ClockContext);
  const [time, setTime] = useState(state.sessionLength * 60);
  const [isSession, setIsSession] = useState(true);
  const intervalId = useRef<number | undefined>(undefined);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    dispatch({type: ActionTypes.CHANGE_ISRUNNING});
  }

  useEffect(() => {
    if (state.isRunning) {
      intervalId.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

    } else {
      clearInterval(intervalId.current);
    }

    return () => {
      clearInterval(intervalId.current);
    };
  }, [state.isRunning, time]);

  useEffect(() => {
    if (time === 0) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }

      setIsSession(!isSession);
      setTime(isSession ? state.breakLength * 60 : state.sessionLength * 60);
    }
  }, [time, isSession, state.breakLength, state.sessionLength]);

  useEffect(() => {
    setTime(state.sessionLength * 60);
  }, [state.sessionLength]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleReset = () => {
    dispatch({type: ActionTypes.RESET});
    dispatch({type: ActionTypes.CHANGE_ISRUNNING, payload: false});
    setIsSession(true);
    setTime(state.sessionLength * 60);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }

  return (
    <div className="time">
      <h5 id="timer-label">{isSession ? 'Session' : 'Break'}</h5>
      <h1 id="time-left">{formatTime(time)}</h1>
      <div className="timer-buttons">
        <button id="start_stop" className="timer-buttons" onClick={handlePlayPause}>
          <i className="fas fa-play"></i><i className="fas fa-pause"></i>
        </button>
        <button id="reset" className="timer-buttons">
          <i className="fas fa-redo" onClick={handleReset}></i>
        </button>
      </div>
      <audio
        id="beep"
        ref={audioRef}
        src="https://www.soundjay.com/clock/sounds/alarm-clock-01.mp3"
      ></audio>
    </div>
  )
}

export default TimerContainer;