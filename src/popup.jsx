import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./popup.css";

function Popup() {
  const [settings, setSettings] = useState({
    skipIntro: false,
    skipRecap: false,
  });

  const handleToggle = (key) => {
    chrome.storage.local.get(key, (data) => {
      const newValue = !data[key];
      chrome.storage.local.set({ [key]: newValue });
      setSettings((prev) => ({
        ...prev,
        [key]: newValue,
      }));
    });
  };

  useEffect(() => {
    chrome.storage.local.get(["skipIntro", "skipRecap"], (data) => {
      setSettings({
        skipIntro: data.skipIntro || false,
        skipRecap: data.skipRecap || false,
      });
    });
  }, []);

  return (
    <div className="popup flex flex-col items-center h-full">
      <h1 className="text-center italic text-xl text-blue-600 font-bold p-4">
        Skiptacle
      </h1>
      <p className="p-10 text-center text-sm text-gray-400">
        Skip the intros/recaps of any Netflix show or movie
      </p>
      <button
        onClick={() => handleToggle("skipIntro")}
        className="bg-blue-600 text-white p-2 rounded-md"
      >
        Skip Intro {settings.skipIntro ? "ON" : "OFF"}
      </button>
      <br />
      <button
        onClick={() => handleToggle("skipRecap")}
        className="bg-blue-600 text-white p-2 rounded-md"
      >
        Skip Recap {settings.skipRecap ? "ON" : "OFF"}
      </button>
    </div>
  );
}

render(<Popup />, document.getElementById("popup-root"));
