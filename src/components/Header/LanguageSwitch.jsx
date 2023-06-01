import React from "react";
import { useTranslation } from "react-i18next";
// import "./index.css";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switch-container">
      <button
        className="language-switch-button"
        onClick={() => changeLanguage("en")}
      >
        English
      </button>
      <button
        className="language-switch-button"
        onClick={() => changeLanguage("ua")}
      >
        Українська
      </button>
    </div>
  );
};

export default LanguageSwitch;
