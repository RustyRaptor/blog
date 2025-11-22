document.querySelectorAll('#files td a, #files th a').forEach(a => {
  a.textContent = a.textContent
    .trimEnd()
    .replace(/\/+$/, '');
});
