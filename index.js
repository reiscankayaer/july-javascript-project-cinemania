import{g as L,a as w,b as E,i as $,c as B}from"./assets/hero-haUgW6Ua.js";import"./assets/vendor-Bie5rgBU.js";const k=()=>console.log("Yükleniyor..."),M=()=>console.log("Yükleme bitti."),S=()=>'<span style="color:orange;">★</span>',v=()=>!1,m=document.getElementById("weeklyList"),y=document.getElementById("upcomingWrapper");async function I(){k();try{await Promise.allSettled([T(),x()])}catch(e){console.error(e)}finally{M()}}async function T(){if(!m)return;const a=(await L("week")).results.slice(0,3),i=await Promise.all(a.map(async t=>{const o=t.vote_average||0,d=S(),r=t.poster_path?`https://image.tmdb.org/t/p/w500${t.poster_path}`:"./img/oops-logo.png",c=t.release_date?t.release_date.slice(0,4):t.first_air_date?t.first_air_date.slice(0,4):"—";return`
      <li class="movie-card" data-id="${t.id}">
        <div class="movie-card__thumb">
          <img class="movie-card__img" src="${r}" alt="${t.title||t.name}" loading="lazy" />
          <div class="movie-card__overlay">
            <span class="movie-card__rating">${o.toFixed(1)}</span>
          </div>
        </div>
        <h3 class="movie-card__title">${t.title||t.name}</h3>
        <div class="movie-card__meta">
          <p>${t.genre_names?t.genre_names.slice(0,2).join(", "):"Movie"} | ${c}</p>
          <div class="movie-card__stars">${d}</div>
        </div>
      </li>
    `}));m.innerHTML=i.join(""),m.querySelectorAll(".movie-card").forEach((t,o)=>{t.addEventListener("click",()=>{console.log("Seçilen Film:",a[o])})})}async function x(){if(!y)return;const a=(await w()).results;if(!a||a.length===0)return;const i=Math.floor(Math.random()*Math.min(a.length,10)),s=a[i],t=await E(s.id),o=t.vote_average||0,d=t.poster_path?`https://image.tmdb.org/t/p/w500${t.poster_path}`:"./img/oops-logo.png",r=t.release_date||"—",c=t.genres.map(f=>f.name).slice(0,2).join(", ")||"—";y.innerHTML=`
    <div class="upcoming__poster">
      <img src="${d}" alt="${t.title}" loading="lazy" />
    </div>
    <div class="upcoming__info">
      <h3 class="upcoming__movie-title">${t.title}</h3>
      <div class="upcoming__meta">
        <p><span class="meta-label">Release date</span><span class="meta-value">${r}</span></p>
        <p><span class="meta-label">Vote / Votes</span><span class="meta-value"><span class="movie-card__rating">${o.toFixed(1)}</span> / ${t.vote_count}</span></p>
        <p><span class="meta-label">Popularity</span><span class="meta-value">${t.popularity.toFixed(1)}</span></p>
        <p><span class="meta-label">Genre</span><span class="meta-value">${c}</span></p>
      </div>
      <p class="upcoming__overview">${t.overview||"No description available."}</p>
      <button class="btn btn--primary upcoming__btn" id="upcomingAddBtn" type="button">
        Add to my library
      </button>
    </div>
  `;const p=document.getElementById("upcomingAddBtn"),g=()=>{v(s.id),p.textContent="Add to my library",p.classList.remove("upcoming__btn--remove")};g(),p.addEventListener("click",()=>{v(s.id),g()})}var n=document.getElementById("teamModalOverlay"),_=document.getElementById("openTeamModal"),b=document.getElementById("closeTeamModal");n&&_&&b&&(_.addEventListener("click",function(){n.classList.remove("hidden"),document.body.style.overflow="hidden"}),b.addEventListener("click",function(){n.classList.add("hidden"),document.body.style.overflow=""}),n.addEventListener("click",function(e){e.target===n&&(n.classList.add("hidden"),document.body.style.overflow="")}),document.addEventListener("keydown",function(e){e.key==="Escape"&&!n.classList.contains("hidden")&&(n.classList.add("hidden"),document.body.style.overflow="")}));let l=0;function u(){let e=document.getElementById("globalLoader");return e||(e=document.createElement("div"),e.id="globalLoader",e.className="global-loader hidden",e.innerHTML='<div class="global-loader__spinner" aria-hidden="true"></div>',document.body.appendChild(e),e)}function G(){let e=document.getElementById("scrollUpButton");return e||(e=document.createElement("button"),e.id="scrollUpButton",e.className="scroll-up hidden",e.type="button",e.setAttribute("aria-label","Scroll to top"),e.textContent="↑",document.body.appendChild(e),e)}function H(){const e=u();l+=1,e.classList.remove("hidden")}function U(){const e=u();l=Math.max(0,l-1),l===0&&e.classList.add("hidden")}function A(){const e=G();if(u(),e.dataset.bound==="true")return;const a=()=>{e.classList.toggle("hidden",window.scrollY<320)};window.addEventListener("scroll",a,{passive:!0}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),a(),e.dataset.bound="true"}async function h(){A(),$(),H();try{await Promise.allSettled([B(),I()])}finally{U()}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h,{once:!0}):h();
//# sourceMappingURL=index.js.map
