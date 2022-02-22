import TomatoDisplay from "./TomatoDisplay";
import Nav from "./Nav";
import FocusText from "./FocusText";
const MainDisplay = (props) => {
  const {
    editFocus,
    setEditFocus,
    setShowSettings,
    focusQuestion,
    setFocusQuestion,
    timer,
    setTimer,
    promodoro,
    setPromodoro,
    setShowFocus,
    settingValues,
  } = props;
  return (
    <div className="main-display">
      <div className="main-display-container">
        <Nav setShowSettings={setShowSettings} />
        <TomatoDisplay
          timer={timer}
          setTimer={setTimer}
          promodoro={promodoro}
          setPromodoro={setPromodoro}
          setShowFocus={setShowFocus}
          focusQuestion={focusQuestion}
          settingValues={settingValues}
        />
        <FocusText
          editFocus={editFocus}
          setEditFocus={setEditFocus}
          focusQuestion={focusQuestion}
          setFocusQuestion={setFocusQuestion}
        />
      </div>
    </div>
  );
};

export default MainDisplay;
