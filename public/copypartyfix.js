document.querySelectorAll('#files td a, #files th a, #files td span.dir, #files th span.dir')
  .forEach(el => {
    el.textContent = el.textContent
      .trimEnd()
      .replace(/\/+$/, '');
  });

(function () {
  const chance = 0.3; // 30% chance of triggering
  if (Math.random() > chance) return;

  const items = Array.from(document.querySelectorAll('#files td a, #files th a, #files td span.dir, #files th span.dir'));
  if (items.length === 0) return;

  const randomItem = items[Math.floor(Math.random() * items.length)];

  const originalText = randomItem.textContent;
  randomItem.textContent = "MINGE";

  setTimeout(() => {
    randomItem.textContent = originalText;
  }, 10_000);
})();
