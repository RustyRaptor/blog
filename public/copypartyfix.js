document.querySelectorAll('#files td a, #files th a').forEach(a => {
  a.textContent = a.textContent
    .trimEnd()
    .replace(/\/+$/, '');
});

(function () {
  const chance = 0.3; // 30% chance of triggering (change this)
  if (Math.random() > chance) return; // Random chance to skip

  const items = Array.from(document.querySelectorAll('#files td a, #files th a'));
  if (items.length === 0) return;

  const randomItem = items[Math.floor(Math.random() * items.length)];

  const originalText = randomItem.textContent;
  randomItem.textContent = "MINGE";

  setTimeout(() => {
    randomItem.textContent = originalText;
  }, 10_000); // 10 seconds
})();
