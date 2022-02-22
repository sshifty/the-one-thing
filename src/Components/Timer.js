import { useState, useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Timer = (props) => {
  const {
    promodoro,
    setPromodoro,
    timerType,
    setTimerType,
    setShowFocus,
    start,
    setStart,
    timer,
    setCurrentControllButton,
  } = props;
  const [minutes, setMinutes] = useState(timer[timerType]);
  const [seconds, setSeconds] = useState(0);
  let progress = Math.floor(
    (((minutes * 60 + seconds) / timer[timerType]) * 60) / 36
  );
  let timeInterval;

  //Reset timer whenever a user change Timer type or change timer in settings
  useEffect(() => {
    setMinutes(timer[timerType]);
    setSeconds(0);
    clearInterval(timeInterval);
    setStart(false);
  }, [timerType, timer]);
  useEffect(() => {
    timeInterval = setInterval(() => {
      if (!start) {
        clearInterval(timeInterval);
      } else {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setStart(false);
            clearInterval(timeInterval);
            setCurrentControllButton("stop");
            if (timerType === "shortBreak") {
              if (promodoro === 2) {
                new Notification("Time to take a long break:)");
                setShowFocus(true);
                setPromodoro(0);
                setTimerType("longBreak");
              } else {
                new Notification("Your short break just ended!");
                setPromodoro(promodoro + 1);
                setTimerType("promoTime");
              }
            } else if (timerType === "promoTime") {
              new Notification(
                "Your Study time has ended, let's take a short break!"
              );
              setTimerType("shortBreak");
            } else {
              new Notification("Your long break has ended, let's focus again!");
              setTimerType("promoTime");
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  });
  return (
    <div className="timer-display">
      {
        <h1>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      }
      <div className="progress-bar">
        <CircularProgressbar
          className="progress-bar"
          value={progress}
          counterClockwise={true}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathColor: `rgba(0, 0, 0, ${progress / 100})`,
            textColor: "#fff",
            trailColor: "#fff",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>
    </div>
  );
};

export default Timer;
