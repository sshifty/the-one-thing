import { useState, useEffect } from "react";
import "./App.css";

import Settings from "./Components/Settings";
import MainDisplay from "./Components/MainDisplay";
import FocusModal from "./Components/FocusModal";
import Description from "./Components/Description";

function App() {
  const [timer, setTimer] = useState({
    promoTime:25,
    shortBreak: 5,
    longBreak: 10,
  });
  const [promodoro,setPromodoro]=useState(0);
  const [focusQuestion, setFocusQuestion] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [showFocus, setShowFocus] = useState(false);
  const [editFocus, setEditFocus] = useState(true);
  const [settingValues, setSettingValues] = useState({
    promoTime: timer.promoTime,
    shortBreak: timer.shortBreak,
    longBreak: timer.longBreak,
    font: "Arial",
    promoTimeColor: '#d95550',
    shortBreakColor:'#4c9195',
    longBreakColor:'#457ca3',
    textColor:'#ffffff'
  });
  useEffect(() => {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  });
  
  return (
    <div className="App">
      <Settings
        timer={timer}
        setTimer={setTimer}
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        settingValues={settingValues}
        setSettingValues={setSettingValues}
      />
      <FocusModal
        focusQuestion={focusQuestion}
        showFocus={showFocus}
        setShowFocus={setShowFocus}
      />
      <MainDisplay
        focusQuestion={focusQuestion}
        setFocusQuestion={setFocusQuestion}
        timer={timer}
        setTimer={setTimer}
        setShowSettings={setShowSettings}
        editFocus={editFocus}
        setEditFocus={setEditFocus}
        promodoro={promodoro}
        setPromodoro={setPromodoro}
        setShowFocus={setShowFocus}
        settingValues={settingValues}
      />
      <Description />
    </div>
  );
}

export default App;
