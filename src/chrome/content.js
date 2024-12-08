let skipIntroEnabled = false;
let skipRecapEnabled = false;
let cooldownPeriod = 10000;

// Initial fetch of settings
chrome.storage.local.get("skipIntro", (data) => {
  skipIntroEnabled = data.skipIntro;
});
chrome.storage.local.get("skipRecap", (data) => {
  skipRecapEnabled = data.skipRecap;
});
// Listen for changes in storage
chrome.storage.onChanged.addListener((changes) => {
  if (changes.skipIntro) {
    skipIntroEnabled = changes.skipIntro.newValue;
  }
  if (changes.skipRecap) {
    skipRecapEnabled = changes.skipRecap.newValue;
  }
});

const documentObserver = new MutationObserver(() => {
  if (skipIntroEnabled) {
    const xpath = "//*[contains(text(),'Skip Intro')]";
    const skipButton = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    if (skipButton) {
      skipButton.click();
      skipIntroEnabled = false;
      setTimeout(() => {
        skipIntroEnabled = true;
      }, cooldownPeriod);
    }
  }
  if (skipRecapEnabled) {
    const xpath = "//*[contains(text(),'Skip Recap')]";
    const skipButton = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    if (skipButton) {
      skipButton.click();
      skipRecapEnabled = false;
      setTimeout(() => {
        skipRecapEnabled = true;
      }, cooldownPeriod);
    }
  }
});

documentObserver.observe(document.body, {
  childList: true,
  subtree: true,
});
