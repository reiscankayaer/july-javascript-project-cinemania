import './home.js'; 

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
  const content = document.getElementById('spotlightContent');
  const closeBtn = document.getElementById('spotlightClose');

  if (!overlay || !content || !closeBtn) return;

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : './img/oops-logo.png';
  const title = movie.title || movie.name || 'Unknown Title';
  const vote = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
  const popularity = movie.popularity ? movie.popularity.toFixed(1) : 'N/A';
  const overview = movie.overview || 'No description available.';

  content.innerHTML = `
    <div class="modal-movie-details" style="display: flex; flex-direction: column; gap: 15px; padding: 20px;">
      <img src="${poster}" alt="${title}" style="width: 100%; border-radius: 8px; max-height: 400px; object-fit: cover;" />
      <h2 style="font-size: 24px; margin: 0;">${title}</h2>
      <p style="font-size: 14px; margin: 0;"><strong>Vote / Popularity:</strong> <span style="color: orange;">★ ${vote}</span> / ${popularity}</p>
      <p style="font-size: 14px; line-height: 1.6; margin: 0;">${overview}</p>
    </div>
  `;

  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  const closeModal = () => {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  };

  closeBtn.onclick = closeModal;
  overlay.onclick = e => {
    if (e.target === overlay) closeModal();
  };
  document.onkeydown = e => {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
      closeModal();
    }
  };
}
