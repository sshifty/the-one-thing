import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
const Settings = (props) => {
  const {
    settingValues,
    setSettingValues,
    timer,
    setTimer,
    showSettings,
    setShowSettings,
  } = props;

  const [allowSubmit, setAllowSubmit] = useState(true);
  const fonts = ["Arial", "Roboto Serif", "Comic Neue", "Verdana", "Georgia"];
  const closeOnKeyDown = (e) => {
    if (e.keyCode === 27) {
      setShowSettings(false);
    }
  };
  const blockKeyDown = (e, value) => {
    if (
      (value.toString().length > 2 && e.keyCode !== 46 && e.keyCode !== 8) ||
      e.keyCode === 190 ||
      e.keyCode === 69
    ) {
      e.preventDefault();
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettingValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (allowSubmit) {
      setTimer((prevState) => {
        return {
          ...prevState,
          promoTime: settingValues.promoTime,
          shortBreak: settingValues.shortBreak,
          longBreak: settingValues.longBreak,
        };
      });
      setShowSettings(false);
      document.body.style.setProperty("--main-font", settingValues.font);
      document.body.style.setProperty("--text-color", settingValues.textColor);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", closeOnKeyDown);
    return () => {
      document.removeEventListener("keydown", closeOnKeyDown);
    };
  }, []);
  useEffect(() => {
    if (
      settingValues.promoTime < 1 ||
      settingValues.shortBreak < 1 ||
      settingValues.longBreak < 1
    ) {
      setAllowSubmit(false);
    } else {
      setAllowSubmit(true);
    }
  }, [settingValues]);

  return (
    <div
      className={"modal " + (showSettings ? "show-modal" : null)}
      onClick={() => setShowSettings(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="settings-inside">
          <div className="modal-header">
            <h3>Timer Setting</h3>
            <span onClick={() => setShowSettings(false)} className="close">
              {"\u2715"}
            </span>
          </div>
          <div className="settings-main">
            <form className="form-settings" onSubmit={onSubmit}>
              <h3>Timer (minutes)</h3>
              <div className="form-timer form-part">
                <div className="input-container">
                  <label className="label-timer" htmlFor="promotime-setting">
                    Promodoro
                  </label>
                  <input
                    type="number"
                    value={settingValues.promoTime}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                      blockKeyDown(e, settingValues.promoTime);
                    }}
                    min={1}
                    max={999}
                    name="promoTime"
                    id="promotime-setting"
                  />
                </div>
                <div className="input-container">
                  <label className="label-setting" htmlFor="shortbreak-setting">
                    Short Break
                  </label>
                  <input
                    type="number"
                    value={settingValues.shortBreak}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                      blockKeyDown(e, settingValues.shortBreak);
                    }}
                    min={1}
                    max={999}
                    name="shortBreak"
                    id="shortbreak-setting"
                  />
                </div>
                <div className="input-container">
                  <label className="label-setting" htmlFor="longbreak-setting">
                    Long Break
                  </label>
                  <input
                    type="number"
                    value={settingValues.longBreak}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                      blockKeyDown(e, settingValues.longBreak);
                    }}
                    min={1}
                    max={999}
                    name="longBreak"
                    id="longbreak-setting"
                  />
                </div>
              </div>
              <div className="form-style form-part">
                <h3>Styles</h3>
                <div className="input-container">
                  <label className="label-setting" htmlFor="font-stlyle">
                    Font
                  </label>
                  <select onChange={handleChange} name="font" id="font-style">
                    {fonts.map((font) => {
                      return (
                        <option
                          key={uuidv4()}
                          value={font}
                          selected={
                            font === setSettingValues.font ? "selected" : null
                          }
                        >
                          {font}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="input-container">
                  <label className="label-setting" htmlFor="main-color">
                    Promotime color:
                  </label>
                  <input
                    value={settingValues.promoTimeColor}
                    onChange={handleChange}
                    type="color"
                    name="promoTimeColor"
                    id="main-color"
                  />
                </div>
                <div className="input-container">
                  <label className="label-setting" htmlFor="shortbreak-color">
                    Short Break color:
                  </label>
                  <input
                    value={settingValues.shortBreakColor}
                    onChange={handleChange}
                    type="color"
                    name="shortBreakColor"
                    id="shortbreak-color"
                  />
                </div>
                <div className="input-container">
                  <label className="label-setting" htmlFor="longbreak-color">
                    Long Break color:
                  </label>
                  <input
                    value={settingValues.longBreakColor}
                    onChange={handleChange}
                    type="color"
                    name="longBreakColor"
                    id="longbreak-color"
                  />
                </div>
                <div className="input-container">
                  <label className="label-setting" htmlFor="text-color">
                    Text color:
                  </label>
                  <input
                    value={settingValues.textColor}
                    onChange={handleChange}
                    type="color"
                    name="textColor"
                    id="text-color"
                  />
                </div>
              </div>
              <div className="btn-container">
                <button
                  className="btn-form"
                  type="submit"
                  disabled={!allowSubmit}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
