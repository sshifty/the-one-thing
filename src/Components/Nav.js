import React from "react";
import logo from "../icons/icon-white.png";
import settingsIcon from "../icons/config-white.png";

const Nav = (props) => {
  const { setShowSettings } = props;

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-title">
          <img className="logo" src={logo} alt="logo-icon" />
          <h2>The-One-Thing</h2>
        </div>
        <div className="nav-settings">
          <button onClick={() => setShowSettings(true)} className="btn-set">
            <img src={settingsIcon} alt="settings-logo" className="logo" />
            Settings
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
