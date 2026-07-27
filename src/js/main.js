import './home.js';
import { initHeader } from './header.js';
import { initHome } from './home.js';
import { initHero } from './hero.js';
import './footer.js';
import './modal.js';

export function initGlobalUi() {
  const themeBtn =
    document.querySelector('.theme-toggle') ||
    document.querySelector('[data-theme-toggle]');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }
}

export function openMovieModal(movie) {
  const overlay = document.getElementById('movie-spotlight-overlay');
}
