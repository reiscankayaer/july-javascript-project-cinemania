import{i as v,a as y,b as B,d as E,e as I}from"./footer-BGGYMWA1.js";const m="my-library-movies",p=()=>{const t=localStorage.getItem(m);return t?JSON.parse(t):[]},_=t=>p().some(o=>o.id===t),L=t=>{const a=p();a.some(o=>o.id===t.id)||(a.push(t),localStorage.setItem(m,JSON.stringify(a)))},$=t=>{let a=p();a=a.filter(o=>o.id!==t),localStorage.setItem(m,JSON.stringify(a))},w=()=>console.log("Yükleniyor..."),k=()=>console.log("Yükleme bitti."),M=()=>'<span style="color:orange;">★</span>',d=document.getElementById("weeklyList"),b=document.getElementById("upcomingWrapper");async function S(){w();try{await Promise.allSettled([A(),H()])}catch(t){console.error(t)}finally{k()}}async function A(){if(!d)return;const a=(await B("week")).results.slice(0,3),o=await Promise.all(a.map(async e=>{const s=e.vote_average||0,l=M(),r=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"./img/oops-logo.png",c=e.release_date?e.release_date.slice(0,4):e.first_air_date?e.first_air_date.slice(0,4):"—";return`
      <li class="movie-card" data-id="${e.id}">
        <div class="movie-card__thumb">
          <img class="movie-card__img" src="${r}" alt="${e.title||e.name}" loading="lazy" />
          <div class="movie-card__overlay">
            <span class="movie-card__rating">${s.toFixed(1)}</span>
          </div>
        </div>
        <h3 class="movie-card__title">${e.title||e.name}</h3>
        <div class="movie-card__meta">
          <p>${e.genre_names?e.genre_names.slice(0,2).join(", "):"Movie"} | ${c}</p>
          <div class="movie-card__stars">${l}</div>
        </div>
      </li>
    `}));d.innerHTML=o.join(""),d.querySelectorAll(".movie-card").forEach((e,s)=>{e.addEventListener("click",()=>{x(a[s])})})}async function H(){if(!b)return;const a=(await E()).results;if(!a||a.length===0)return;const o=Math.floor(Math.random()*Math.min(a.length,10)),n=a[o],e=await I(n.id),s=e.vote_average||0,l=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"./img/oops-logo.png",r=e.release_date||"—",c=e.genres.map(u=>u.name).slice(0,2).join(", ")||"—";b.innerHTML=`
    <div class="upcoming__poster">
      <img src="${l}" alt="${e.title}" loading="lazy" />
    </div>
    <div class="upcoming__info">
      <h3 class="upcoming__movie-title">${e.title}</h3>
      <div class="upcoming__meta">
        <p><span class="meta-label">Release date</span><span class="meta-value">${r}</span></p>
        <p><span class="meta-label">Vote / Votes</span><span class="meta-value"><span class="movie-card__rating">${s.toFixed(1)}</span> / ${e.vote_count}</span></p>
        <p><span class="meta-label">Popularity</span><span class="meta-value">${e.popularity.toFixed(1)}</span></p>
        <p><span class="meta-label">Genre</span><span class="meta-value">${c}</span></p>
      </div>
      <p class="upcoming__overview">${e.overview||"No description available."}</p>
      <button class="btn btn--primary upcoming__btn" id="upcomingAddBtn" type="button">
        Add to my library
      </button>
    </div>
  `;const i=document.getElementById("upcomingAddBtn"),g=()=>{_(n.id)?(i.textContent="Remove from my library",i.classList.add("upcoming__btn--remove")):(i.textContent="Add to my library",i.classList.remove("upcoming__btn--remove"))};g(),i.addEventListener("click",()=>{_(n.id)?$(n.id):L(n),g()})}async function f(){if(document.getElementById("weeklyList"))try{typeof h=="function"&&h(),typeof v=="function"&&v(),typeof y=="function"&&await y(),await S()}catch(t){console.error("Anasayfa yüklenirken hata:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",f):f();document.getElementById("movie-modal-backdrop"),document.getElementById("modal-close-btn"),document.getElementById("modal-poster"),document.getElementById("modal-title"),document.getElementById("modal-vote"),document.getElementById("modal-votes-count"),document.getElementById("modal-popularity"),document.getElementById("modal-genre"),document.getElementById("modal-overview"),document.getElementById("library-toggle-btn");function h(){const t=document.querySelector(".theme-toggle")||document.querySelector("[data-theme-toggle]");t&&t.addEventListener("click",()=>{document.body.classList.toggle("dark-mode")})}function x(t){document.getElementById("movie-spotlight-overlay")}
//# sourceMappingURL=main-hDvGAroS.js.map
