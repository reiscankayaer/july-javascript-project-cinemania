import{b,o as f,d as h,e as $,f as g,h as M,s as w,i as L,a as E}from"./assets/footer-CLMXpC5o.js";import{s as u,h as y,i as S}from"./assets/uz-Bn-lxP5o.js";import"./assets/vendor-Bie5rgBU.js";const k=(n,a)=>{const o=Math.round((n||0)/2);let t="";for(let e=1;e<=5;e++)e<=o?t+=`<span class="${a}" style="color: orange;">★</span>`:t+=`<span class="${a} star-empty" style="color: gray;">☆</span>`;return t},d=document.getElementById("weeklyList"),_=document.getElementById("upcomingWrapper");async function B(){u();try{await Promise.allSettled([H(),x()])}catch(n){console.error(n)}finally{y()}}async function H(){if(!d)return;const a=(await b("week")).results.slice(0,3),o=await Promise.all(a.map(async e=>{const s=e.vote_average||0,r=k(s,"movie-card__star"),l=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"./img/oops-logo.png",c=e.release_date?e.release_date.slice(0,4):e.first_air_date?e.first_air_date.slice(0,4):"—";return`
      <li class="movie-card" data-id="${e.id}">
        <div class="movie-card__thumb">
          <img class="movie-card__img" src="${l}" alt="${e.title||e.name}" loading="lazy" />
          <div class="movie-card__overlay">
            <span class="movie-card__rating">${s.toFixed(1)}</span>
          </div>
        </div>
        <h3 class="movie-card__title">${e.title||e.name}</h3>
        <div class="movie-card__meta">
          <p>${e.genre_names?e.genre_names.slice(0,2).join(", "):"Movie"} | ${c}</p>
          <div class="movie-card__stars">${r}</div>
        </div>
      </li>
    `}));d.innerHTML=o.join(""),d.querySelectorAll(".movie-card").forEach((e,s)=>{e.addEventListener("click",()=>{f(a[s])})})}async function x(){if(!_)return;const a=(await h()).results;if(!a||a.length===0)return;const o=Math.floor(Math.random()*Math.min(a.length,10)),t=a[o],e=await $(t.id),s=e.vote_average||0,r=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"./img/oops-logo.png",l=e.release_date||"—",c=e.genres.map(m=>m.name).slice(0,2).join(", ")||"—";_.innerHTML=`
    <div class="upcoming__poster">
      <img src="${r}" alt="${e.title}" loading="lazy" />
    </div>
    <div class="upcoming__info">
      <h3 class="upcoming__movie-title">${e.title}</h3>
      <div class="upcoming__meta">
        <p><span class="meta-label">Release date</span><span class="meta-value">${l}</span></p>
        <p><span class="meta-label">Vote / Votes</span><span class="meta-value"><span class="movie-card__rating">${s.toFixed(1)}</span> / ${e.vote_count}</span></p>
        <p><span class="meta-label">Popularity</span><span class="meta-value">${e.popularity.toFixed(1)}</span></p>
        <p><span class="meta-label">Genre</span><span class="meta-value">${c}</span></p>
      </div>
      <p class="upcoming__overview">${e.overview||"No description available."}</p>
      <button class="btn btn--primary upcoming__btn" id="upcomingAddBtn" type="button">
        Add to my library
      </button>
    </div>
  `;const i=document.getElementById("upcomingAddBtn"),p=()=>{g(t.id)?(i.textContent="Remove from my library",i.classList.add("upcoming__btn--remove")):(i.textContent="Add to my library",i.classList.remove("upcoming__btn--remove"))};p(),i.addEventListener("click",()=>{g(t.id)?M(t.id):w(t),p()})}async function v(){S(),L(),u();try{await Promise.allSettled([E(),B()])}finally{y()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v,{once:!0}):v();
//# sourceMappingURL=index.js.map
