import{i as S,a as w,g as G,c as I}from"./assets/hero-CYO8h5CC.js";import{i as M,s as $,h as k}from"./assets/uz-BJpWJFnS.js";import"./assets/vendor-Bie5rgBU.js";const C="cinemania-saved-movies";function b(){try{const e=localStorage.getItem(C);return e?JSON.parse(e):[]}catch(e){return reportError("Saved movies error:",e),[]}}let l=[],u=[],p=1;const h=9;async function L(){M(),S(),$();try{await w(),await H()}catch(e){console.error("Library yüklenirken hata oluştu:",e)}finally{k()}}async function H(){const e=document.getElementById("libraryGallery"),t=document.getElementById("loadMore"),i=document.getElementById("genreFilter");if(!e)return;if(l=b(),u=[...l],l.length===0){E(e,t,i);return}const d=await G();P(i,d,e,t),v(e,t),t&&t.addEventListener("click",()=>{p++,v(e,t)}),e.addEventListener("click",s=>{const o=s.target.closest(".movie-card");o&&console.log("Seçilen film ID:",o.dataset.id)}),document.addEventListener("cinemania:library:add",()=>_(e,t)),document.addEventListener("cinemania:library:remove",()=>_(e,t))}function E(e,t,i){t&&t.classList.add("is-hidden"),i&&i.classList.add("is-hidden"),e.innerHTML=`
    <div class="empty-state">
      <p class="empty-text">OOPS...<br>We are very sorry!<br>You don't have any movies<br>at your library.</p>
      <a href="./catalog.html" class="btn-search-more">Search Movie</a>
    </div>
  `}function P(e,t,i,d){if(!e)return;const s=e.querySelector(".custom-select__list"),o=e.querySelector(".custom-select__button"),a=e.querySelector(".custom-select__label");if(!s||!o||!a)return;const g=new Set;l.forEach(n=>{var r;return(r=n.genre_ids)==null?void 0:r.forEach(c=>g.add(c))});const m=document.createElement("li");m.dataset.value="all",m.textContent="All Genres",m.classList.add("selected"),s.appendChild(m),g.forEach(n=>{const r=t.get(n);if(r){const c=document.createElement("li");c.dataset.value=n,c.textContent=r,s.appendChild(c)}}),o.addEventListener("click",n=>{n.stopPropagation(),s.classList.toggle("hide")}),document.addEventListener("click",n=>{e.contains(n.target)||s.classList.add("hide")}),s.addEventListener("click",n=>{const r=n.target.closest("li");if(!r)return;s.querySelectorAll("li").forEach(y=>y.classList.remove("selected")),r.classList.add("selected"),a.textContent=r.textContent,s.classList.add("hide");const c=r.dataset.value;p=1,i.innerHTML="",u=c==="all"?l:l.filter(y=>{var f;return(f=y.genre_ids)==null?void 0:f.includes(Number(c))}),v(i,d)})}async function v(e,t){const i=(p-1)*h,d=i+h,s=u.slice(i,d);d>=u.length?t&&t.classList.add("is-hidden"):t&&t.classList.remove("is-hidden");const o=await Promise.all(s.map(async a=>{var c;const g=((c=a.genre_names)==null?void 0:c.length)>0?a.genre_names:await I(a.genre_ids||[]),m=a.release_date?a.release_date.slice(0,4):"—",n=a.poster_path?`https://image.tmdb.org/t/p/w500${a.poster_path}`:"./img/oops-logo.png",r=(a.vote_average||0).toFixed(1);return`
        <li class="movie-card" data-id="${a.id}">
          <div class="movie-card__thumb">
            <img class="movie-card__img" src="${n}" alt="${a.title}" loading="lazy" />
            <div class="movie-card__overlay">
              <span class="movie-card__rating">${r}</span>
            </div>
          </div>
          <h3 class="movie-card__title">${a.title}</h3>
          <div class="movie-card__meta">
            <p>${g.slice(0,2).join(", ")} | ${m}</p>
          </div>
        </li>`}));e.innerHTML+=o.join("")}function _(e,t){if(l=b(),u=[...l],p=1,e.innerHTML="",l.length===0){E(e,t);return}v(e,t)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",L,{once:!0}):L();
//# sourceMappingURL=library.js.map
