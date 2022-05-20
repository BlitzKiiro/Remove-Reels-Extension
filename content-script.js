//wait for DOM element to render
const waitForReels = () => {
  console.log("remove reels extension is watching content");
  const selector = "[aria-label=Reels]";
  if (document.querySelector(selector)) {
    document.querySelector(selector).parentNode.parentNode.parentNode.remove();
    console.log("reels removed");
  }
  const observer = new MutationObserver(() => {
    if (document.querySelector(selector)) {
      document
        .querySelector(selector)
        .parentNode.parentNode.parentNode.remove();
      console.log("reels removed");
    }
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};
waitForReels();
