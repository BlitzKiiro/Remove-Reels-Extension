//wait for DOM element to render
const waitForReels = () => {
  console.log("remove reels extension is watching content");
  const selectors = ["[aria-label=Reels]", "[aria-label=ريلز]"];

  const observer = new MutationObserver(() => {
    selectors.forEach((selector) => {
      if (document.querySelector(selector)) {
        document
          .querySelector(selector)
          .parentNode.parentNode.parentNode.remove();
        console.log("reels removed");
      }
    });
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
};
waitForReels();
