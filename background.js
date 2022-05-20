//check for current tab function
const checkCurrentTab = () => {
  let queryOptions = { active: true, lastFocusedWindow: true };
  chrome.tabs.query(queryOptions).then(([tab]) => {
    if (tab.url === "https://www.facebook.com/") {
      chrome.action.enable();
    } else {
      chrome.action.disable();
    }
  });
};
chrome.tabs.onUpdated.addListener(() => {
  checkCurrentTab();
});

chrome.tabs.onActivated.addListener(() => {
  checkCurrentTab();
});
