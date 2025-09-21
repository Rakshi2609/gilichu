import React from "react";
import "../../styles/TopUtilityBar.css";
import GoogleTranslate from "./GoogleTranslate";

const TopUtilityBar = ({
    onFontIncrease,
    onFontDecrease,
    onFontReset,
    onToggleDark,
    darkMode,
}) => {
    return (
        <div className="top-utility-bar-gov">
            <div className="top-utility-left">
                <span className="gov-india-label">Government of India</span>
            </div>
            <div className="top-utility-right">
                <span className="tub-label">Accessibility:</span>
                <button onClick={onFontDecrease} title="Decrease font size" className="tub-btn">A-</button>
                <button onClick={onFontReset} title="Reset font size" className="tub-btn">A</button>
                <button onClick={onFontIncrease} title="Increase font size" className="tub-btn">A+</button>
                <span className="tub-divider" />
                <button onClick={onToggleDark} title="Toggle light/dark mode" className="tub-btn">
                    {darkMode ? "🌙" : "☀️"}
                </button>
                <div id="google_translate_element" className="tub-translate">
                    <GoogleTranslate />
                </div>
            </div>
        </div>
    );
};

export default TopUtilityBar;