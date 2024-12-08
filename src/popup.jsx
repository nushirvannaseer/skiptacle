import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import Switch from "./components/Switch";
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
        Skip the intros/recaps of any Netflix/Amazon Prime show or movie
      </p>

      <div className="space-y-4 flex flex-col">
        <Switch
          label="Skip Intro"
          checked={settings.skipIntro}
          onChange={() => handleToggle("skipIntro")}
        />

        <Switch
          label="Skip Recap"
          checked={settings.skipRecap}
          onChange={() => handleToggle("skipRecap")}
        />
      </div>
    </div>
  );
}

render(<Popup />, document.getElementById("popup-root"));
