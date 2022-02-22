import Timer from "./Timer";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const TomatoDisplay = (props) => {
  const {
    focusQuestion,
    setShowFocus,
    promodoro,
    setPromodoro,
    timer,
    setTimer,
    settingValues,
  } = props;
  const [start, setStart] = useState(false);
  const [timerType, setTimerType] = useState("promoTime");
  const [currentControlButton, setCurrentControllButton] = useState("stop");
  const controlButtons = ["start", "stop"];
  const timerButtons = ["promoTime", "shortBreak", "longBreak"];
  const changeTimer = (type) => {
    if (start && type !== timerType) {
      if (
        window.confirm(
          "Timer is still running, switching to other timer will reset the current one! "
        )
      ) {
        document.body.style.setProperty(
          "--main-color",
          settingValues[type + "Color"]
        );
        setTimerType(type);
        setStart(false);
        setCurrentControllButton("stop");
      }
    } else {
      document.body.style.setProperty(
        "--main-color",
        settingValues[type + "Color"]
      );

      setTimerType(type);
      setCurrentControllButton("stop");
    }
  };
  const changeControl = (type) => {
    if (type === "start") {
      if (!focusQuestion) {
        alert("Set your focus question first!");
      } else {
        setStart(true);
        setCurrentControllButton("start");
      }
    } else {
      setStart(false);
      setCurrentControllButton("stop");
    }
  };
  useEffect(() => {
    setCurrentControllButton("stop");
  }, [timer]);
  useEffect(() => {
    document.body.style.setProperty(
      "--main-color",
      settingValues[timerType + "Color"]
    );
  }, [settingValues]);
  return (
    <div className="tomato-display">
      <div className="tomato-display-container">
        <div className="tomato-header">
          {timerButtons.map((but) => {
            return (
              <button
                key={uuidv4()}
                className={
                  "btn-timer " + (but === timerType ? "selected" : null)
                }
                onClick={() => changeTimer(but)}
              >
                {but === "promoTime"
                  ? "Promodoro"
                  : but === "shortBreak"
                  ? "Short Break"
                  : "Long Break"}
              </button>
            );
          })}
        </div>

        <Timer
          timer={timer}
          timerType={timerType}
          start={start}
          setStart={setStart}
          setTimer={setTimer}
          setTimerType={setTimerType}
          promodoro={promodoro}
          setPromodoro={setPromodoro}
          setShowFocus={setShowFocus}
          setCurrentControllButton={setCurrentControllButton}
        />
        <div className="tomato-footer">
          {controlButtons.map((but) => {
            return (
              <button
                key={uuidv4()}
                className={
                  "btn-control " +
                  (currentControlButton === but ? "btn-control-selected" : null)
                }
                onClick={() => changeControl(but)}
              >
                {but}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TomatoDisplay;
