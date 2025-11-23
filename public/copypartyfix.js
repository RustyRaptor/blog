function cleanItems() {
  document.querySelectorAll('#files td a, #files th a, span.dir')
    .forEach(el => {
      el.textContent = el.textContent.trimEnd().replace(/\/+$/, '');
    });
}

function randomMingeEvent() {
  const chance = 0.5;
  if (Math.random() > chance) return;

  const items = Array.from(document.querySelectorAll('#files td a, #files th a, span.dir'));
  if (items.length === 0) return;

  const randomItem = items[Math.floor(Math.random() * items.length)];
  const originalText = randomItem.textContent;

  randomItem.textContent = "MINGE";

  setTimeout(() => {
    randomItem.textContent = originalText;
  }, 10_000);
}

// Run once at initial load
cleanItems();
randomMingeEvent();

// --- URL CHANGE DETECTION BELOW ---

let lastUrl = location.href;

new MutationObserver(() => {
  const currentUrl = location.href;
  if (currentUrl !== lastUrl) {
    lastUrl = currentUrl;

    // Give the page time to load new content
    setTimeout(() => {
      cleanItems();
      randomMingeEvent();
    }, 50);
  }
}).observe(document, { subtree: true, childList: true });
(function() {
  const push = history.pushState;
  history.pushState = function() {
    push.apply(history, arguments);
    window.dispatchEvent(new Event('urlchange'));
  };

  const replace = history.replaceState;
  history.replaceState = function() {
    replace.apply(history, arguments);
    window.dispatchEvent(new Event('urlchange'));
  };
})();

window.addEventListener("urlchange", () => {
  setTimeout(() => {
    cleanItems();
    randomMingeEvent();
  }, 50);
});

// CONFIG
const soundChance = 0.9; // 20% chance (change this)
const soundUrl = "https://rustyraptor.github.io/blog/huh.opus"; // <-- put your sound file here

// Create audio object once (browser-friendly)
const funnySound = new Audio(soundUrl);

// Global click handler
document.addEventListener("click", function (event) {
  const link = event.target.closest("a");
  if (!link) return; // ignore clicks not on <a>

  // Roll dice
  if (Math.random() <= soundChance) {
    funnySound.currentTime = 0; // restart from beginning
    funnySound.play().catch(() => {}); // ignore autoplay restrictions
  }
});

