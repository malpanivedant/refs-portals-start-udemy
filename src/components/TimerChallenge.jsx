import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);

  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  const isTimerActive = remainingTime > 0 && remainingTime < targetTime * 1000;

  const timer = useRef();
  const dialog = useRef();

  if (remainingTime <= 0) {
    clearInterval(timer.current);

    dialog.current.show();
  }

  function handleReset() {
    setRemainingTime(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        prevRemainingTime - 10;
      });
      // setTimerExpired(true);
      // dialog.current.show();
    }, 10);

    setTimerStarted(true);
  }

  function handleStop() {
    dialog.current.show();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={remainingTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={!isTimerActive ? handleStart : handleStop}>
            {isTimerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Timer is Running" : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
