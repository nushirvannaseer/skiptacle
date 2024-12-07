let skipIntroEnabled = false;

// Initial fetch of settings
chrome.storage.local.get("skipIntro", (data) => {
  skipIntroEnabled = data.skipIntro;
});

// Listen for changes in storage
chrome.storage.onChanged.addListener((changes) => {
  if (changes.skipIntro) {
    skipIntroEnabled = changes.skipIntro.newValue;
  }
});

const documentObserver = new MutationObserver(() => {
  if (skipIntroEnabled) {
    const skipButton = document.querySelector("[data-uia='player-skip-intro']");
    if (skipButton) {
      skipButton.click();
    }
  }
});

documentObserver.observe(document.body, {
  childList: true,
  subtree: true,
});
