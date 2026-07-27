import{b as _,d as y,e as b,i as h,a as $}from"./assets/hero-CA2SejuT.js";import{i as f,s as B,h as E}from"./assets/uz-BJpWJFnS.js";import"./assets/vendor-Bie5rgBU.js";const w=()=>console.log("Yükleniyor..."),I=()=>console.log("Yükleme bitti."),L=()=>'<span style="color:orange;">★</span>',p=()=>!1,c=document.getElementById("weeklyList"),g=document.getElementById("upcomingWrapper");async function k(){w();try{await Promise.allSettled([M(),S()])}catch(o){console.error(o)}finally{I()}}async function M(){if(!c)return;const t=(await _("week")).results.slice(0,3),s=await Promise.all(t.map(async e=>{const a=e.vote_average||0,l=L(),i=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"./img/oops-logo.png",r=e.release_date?e.release_date.slice(0,4):e.first_air_date?e.first_air_date.slice(0,4):"—";return`
      <li class="movie-card" data-id="${e.id}">
        <div class="movie-card__thumb">
          <img class="movie-card__img" src="${i}" alt="${e.title||e.name}" loading="lazy" />
          <div class="movie-card__overlay">
            <span class="movie-card__rating">${a.toFixed(1)}</span>
          </div>
        </div>
        <h3 class="movie-card__title">${e.title||e.name}</h3>
        <div class="movie-card__meta">
          <p>${e.genre_names?e.genre_names.slice(0,2).join(", "):"Movie"} | ${r}</p>
          <div class="movie-card__stars">${l}</div>
        </div>
      </li>
    `}));c.innerHTML=s.join(""),c.querySelectorAll(".movie-card").forEach((e,a)=>{e.addEventListener("click",()=>{console.log("Seçilen Film:",t[a])})})}async function S(){if(!g)return;const t=(await y()).results;if(!t||t.length===0)return;const s=Math.floor(Math.random()*Math.min(t.length,10)),n=t[s],e=await b(n.id),a=e.vote_average||0,l=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"./img/oops-logo.png",i=e.release_date||"—",r=e.genres.map(v=>v.name).slice(0,2).join(", ")||"—";g.innerHTML=`
    <div class="upcoming__poster">
      <img src="${l}" alt="${e.title}" loading="lazy" />
    </div>
    <div class="upcoming__info">
      <h3 class="upcoming__movie-title">${e.title}</h3>
      <div class="upcoming__meta">
        <p><span class="meta-label">Release date</span><span class="meta-value">${i}</span></p>
        <p><span class="meta-label">Vote / Votes</span><span class="meta-value"><span class="movie-card__rating">${a.toFixed(1)}</span> / ${e.vote_count}</span></p>
        <p><span class="meta-label">Popularity</span><span class="meta-value">${e.popularity.toFixed(1)}</span></p>
        <p><span class="meta-label">Genre</span><span class="meta-value">${r}</span></p>
      </div>
      <p class="upcoming__overview">${e.overview||"No description available."}</p>
      <button class="btn btn--primary upcoming__btn" id="upcomingAddBtn" type="button">
        Add to my library
      </button>
    </div>
  `;const d=document.getElementById("upcomingAddBtn"),m=()=>{p(n.id),d.textContent="Add to my library",d.classList.remove("upcoming__btn--remove")};m(),d.addEventListener("click",()=>{p(n.id),m()})}document.getElementById("movie-modal-backdrop"),document.getElementById("modal-close-btn"),document.getElementById("modal-poster"),document.getElementById("modal-title"),document.getElementById("modal-vote"),document.getElementById("modal-votes-count"),document.getElementById("modal-popularity"),document.getElementById("modal-genre"),document.getElementById("modal-overview"),document.getElementById("library-toggle-btn");async function u(){f(),h(),B();try{await Promise.allSettled([$(),k()])}finally{E()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u,{once:!0}):u();
//# sourceMappingURL=index.js.map
