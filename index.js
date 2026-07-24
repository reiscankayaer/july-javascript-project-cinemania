import{g as f,a as L,b as w,i as E,c as $}from"./assets/hero-haUgW6Ua.js";import"./assets/vendor-Bie5rgBU.js";const m=document.getElementById("weeklyList"),g=document.getElementById("upcomingWrapper");async function B(){showGlobalLoader();try{await Promise.allSettled([M(),k()])}catch(e){console.error(e)}finally{hideGlobalLoader()}}async function M(){if(!m)return;const n=(await f("week")).results.slice(0,3),d=await Promise.all(n.map(async t=>{const a=t.vote_average||0,l=generateStarIconsMarkup(a,"movie-card__star"),r=t.poster_path?`https://image.tmdb.org/t/p/w500${t.poster_path}`:"./img/oops-logo.png",c=t.release_date?t.release_date.slice(0,4):t.first_air_date?t.first_air_date.slice(0,4):"—";return`
      <li class="movie-card" data-id="${t.id}">
        <div class="movie-card__thumb">
          <img class="movie-card__img" src="${r}" alt="${t.title||t.name}" loading="lazy" />
          <div class="movie-card__overlay">
            <span class="movie-card__rating">${a.toFixed(1)}</span>
          </div>
        </div>
        <h3 class="movie-card__title">${t.title||t.name}</h3>
        <div class="movie-card__meta">
          <p>${t.genre_names?t.genre_names.slice(0,2).join(", "):"Movie"} | ${c}</p>
          <div class="movie-card__stars">${l}</div>
        </div>
      </li>
    `}));m.innerHTML=d.join(""),m.querySelectorAll(".movie-card").forEach(t=>{t.addEventListener("click",()=>{showMovieSpotlight(t.dataset.id)})})}async function k(){if(!g)return;const n=(await L()).results;if(!n||n.length===0)return;const d=Math.floor(Math.random()*Math.min(n.length,10)),t=n[d],a=await w(t.id),l=a.vote_average||0,r=a.poster_path?`https://image.tmdb.org/t/p/w500${a.poster_path}`:"./img/oops-logo.png",c=a.release_date||"—",h=a.genres.map(v=>v.name).slice(0,2).join(", ")||"—";g.innerHTML=`
    <div class="upcoming__poster">
      <img src="${r}" alt="${a.title}" loading="lazy" />
    </div>
    <div class="upcoming__info">
      <h3 class="upcoming__movie-title">${a.title}</h3>
      <div class="upcoming__meta">
        <p><span class="meta-label">Release date</span><span class="meta-value">${c}</span></p>
        <p><span class="meta-label">Vote / Votes</span><span class="meta-value"><span class="movie-card__rating">${l.toFixed(1)}</span> / ${a.vote_count}</span></p>
        <p><span class="meta-label">Popularity</span><span class="meta-value">${a.popularity.toFixed(1)}</span></p>
        <p><span class="meta-label">Genre</span><span class="meta-value">${h}</span></p>
      </div>
      <p class="upcoming__overview">${a.overview||"No description available."}</p>
      <button class="btn btn--primary upcoming__btn" id="upcomingAddBtn" type="button">
        Add to my library
      </button>
    </div>
  `;const s=document.getElementById("upcomingAddBtn"),u=()=>{isMovieSaved(t.id)?(s.textContent="Remove from my library",s.classList.add("upcoming__btn--remove")):(s.textContent="Add to my library",s.classList.remove("upcoming__btn--remove"))};u(),s.addEventListener("click",()=>{isMovieSaved(t.id)?removeMovieFromLibrary(t.id):saveMovieToLibrary(t),u()})}var o=document.getElementById("teamModalOverlay"),y=document.getElementById("openTeamModal"),_=document.getElementById("closeTeamModal");o&&y&&_&&(y.addEventListener("click",function(){o.classList.remove("hidden"),document.body.style.overflow="hidden"}),_.addEventListener("click",function(){o.classList.add("hidden"),document.body.style.overflow=""}),o.addEventListener("click",function(e){e.target===o&&(o.classList.add("hidden"),document.body.style.overflow="")}),document.addEventListener("keydown",function(e){e.key==="Escape"&&!o.classList.contains("hidden")&&(o.classList.add("hidden"),document.body.style.overflow="")}));let i=0;function p(){let e=document.getElementById("globalLoader");return e||(e=document.createElement("div"),e.id="globalLoader",e.className="global-loader hidden",e.innerHTML='<div class="global-loader__spinner" aria-hidden="true"></div>',document.body.appendChild(e),e)}function S(){let e=document.getElementById("scrollUpButton");return e||(e=document.createElement("button"),e.id="scrollUpButton",e.className="scroll-up hidden",e.type="button",e.setAttribute("aria-label","Scroll to top"),e.textContent="↑",document.body.appendChild(e),e)}function I(){const e=p();i+=1,e.classList.remove("hidden")}function T(){const e=p();i=Math.max(0,i-1),i===0&&e.classList.add("hidden")}function x(){const e=S();if(p(),e.dataset.bound==="true")return;const n=()=>{e.classList.toggle("hidden",window.scrollY<320)};window.addEventListener("scroll",n,{passive:!0}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),n(),e.dataset.bound="true"}async function b(){x(),E(),I();try{await Promise.allSettled([$(),B()])}finally{T()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b,{once:!0}):b();
//# sourceMappingURL=index.js.map
