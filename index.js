import{b as v,d as y,e as b,i as h,a as $}from"./assets/hero-CYO8h5CC.js";import{i as f,s as w,h as L}from"./assets/uz-BJpWJFnS.js";import"./assets/vendor-Bie5rgBU.js";const k=()=>console.log("Yükleniyor..."),M=()=>console.log("Yükleme bitti."),E=()=>'<span style="color:orange;">★</span>',m=()=>!1,d=document.getElementById("weeklyList"),g=document.getElementById("upcomingWrapper");async function S(){k();try{await Promise.allSettled([B(),G()])}catch(n){console.error(n)}finally{M()}}async function B(){if(!d)return;const a=(await v("week")).results.slice(0,3),o=await Promise.all(a.map(async e=>{const t=e.vote_average||0,i=E(),l=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"./img/oops-logo.png",r=e.release_date?e.release_date.slice(0,4):e.first_air_date?e.first_air_date.slice(0,4):"—";return`
      <li class="movie-card" data-id="${e.id}">
        <div class="movie-card__thumb">
          <img class="movie-card__img" src="${l}" alt="${e.title||e.name}" loading="lazy" />
          <div class="movie-card__overlay">
            <span class="movie-card__rating">${t.toFixed(1)}</span>
          </div>
        </div>
        <h3 class="movie-card__title">${e.title||e.name}</h3>
        <div class="movie-card__meta">
          <p>${e.genre_names?e.genre_names.slice(0,2).join(", "):"Movie"} | ${r}</p>
          <div class="movie-card__stars">${i}</div>
        </div>
      </li>
    `}));d.innerHTML=o.join(""),d.querySelectorAll(".movie-card").forEach((e,t)=>{e.addEventListener("click",()=>{console.log("Seçilen Film:",a[t])})})}async function G(){if(!g)return;const a=(await y()).results;if(!a||a.length===0)return;const o=Math.floor(Math.random()*Math.min(a.length,10)),s=a[o],e=await b(s.id),t=e.vote_average||0,i=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:"./img/oops-logo.png",l=e.release_date||"—",r=e.genres.map(u=>u.name).slice(0,2).join(", ")||"—";g.innerHTML=`
    <div class="upcoming__poster">
      <img src="${i}" alt="${e.title}" loading="lazy" />
    </div>
    <div class="upcoming__info">
      <h3 class="upcoming__movie-title">${e.title}</h3>
      <div class="upcoming__meta">
        <p><span class="meta-label">Release date</span><span class="meta-value">${l}</span></p>
        <p><span class="meta-label">Vote / Votes</span><span class="meta-value"><span class="movie-card__rating">${t.toFixed(1)}</span> / ${e.vote_count}</span></p>
        <p><span class="meta-label">Popularity</span><span class="meta-value">${e.popularity.toFixed(1)}</span></p>
        <p><span class="meta-label">Genre</span><span class="meta-value">${r}</span></p>
      </div>
      <p class="upcoming__overview">${e.overview||"No description available."}</p>
      <button class="btn btn--primary upcoming__btn" id="upcomingAddBtn" type="button">
        Add to my library
      </button>
    </div>
  `;const c=document.getElementById("upcomingAddBtn"),p=()=>{m(s.id),c.textContent="Add to my library",c.classList.remove("upcoming__btn--remove")};p(),c.addEventListener("click",()=>{m(s.id),p()})}async function _(){f(),h(),w();try{await Promise.allSettled([$(),S()])}finally{L()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_,{once:!0}):_();
//# sourceMappingURL=index.js.map
