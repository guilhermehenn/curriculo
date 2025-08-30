(function () {
  'use strict';
  const root = document.documentElement;
  const checkbox = document.getElementById('themeSwitch');
  const emoji = document.getElementById('switchEmoji');
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Tema padrão = dark; respeita preferência salva
  const saved = localStorage.getItem('theme');
  if (checkbox && emoji) {
    if (saved === 'light') {
      root.setAttribute('data-theme', 'light');
      checkbox.checked = false;
      emoji.textContent = '☀️';
    } else {
      root.setAttribute('data-theme', 'dark');
      checkbox.checked = true;
      emoji.textContent = '🌙';
    }

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        emoji.textContent = '🌙';
      } else {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        emoji.textContent = '☀️';
      }
    });
  } else {
    // Páginas sem o switch: aplica salvo ou dark por padrão
    root.setAttribute('data-theme', saved === 'light' ? 'light' : 'dark');
  }
})();