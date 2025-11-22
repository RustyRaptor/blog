function cleanItems() {
  document.querySelectorAll('#files td a, #files th a, span.dir')
    .forEach(el => {
      el.textContent = el.textContent
        .trimEnd()
        .replace(/\/+$/, '');
    });
}

function randomMingeEvent() {
  const chance = 0.3;
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

// Run immediately at load
cleanItems();
randomMingeEvent();

// Watch for changes to the table
const target = document.querySelector('#files');

if (target) {
  const observer = new MutationObserver(() => {
    cleanItems();
    randomMingeEvent();
  });

  observer.observe(target, {
    childList: true,
    subtree: true
  });
}
