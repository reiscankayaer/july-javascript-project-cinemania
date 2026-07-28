import{i as S,a as w,r as E,g as G,o as $,c as C}from"./assets/footer-CLMXpC5o.js";import{i as H,s as k,h as I}from"./assets/uz-Bn-lxP5o.js";import"./assets/vendor-Bie5rgBU.js";let d=[],g=[],f=1;const _=9;async function L(){H(),S(),k();try{await w(),await P()}catch(e){console.error("Library yüklenirken hata oluştu:",e)}finally{I()}}async function P(){const e=document.getElementById("libraryGallery"),t=document.getElementById("loadMore"),r=document.getElementById("genreFilter");if(!e)return;if(d=E(),g=[...d],d.length===0){M(e,t,r);return}const v=await G();x(r,v,e,t),y(e,t),t&&t.addEventListener("click",()=>{f++,y(e,t)}),e.addEventListener("click",s=>{const o=s.target.closest(".movie-card");if(o){const a=Number(o.dataset.id),m=g.find(c=>Number(c.id)===a)||d.find(c=>Number(c.id)===a);m&&$(m)}}),document.addEventListener("cinemania:library:add",()=>b(e,t)),document.addEventListener("cinemania:library:remove",()=>b(e,t))}function M(e,t,r){t&&t.classList.add("is-hidden"),r&&r.classList.add("is-hidden"),e.innerHTML=`
    <div class="empty-state">
      <p class="empty-text">OOPS...<br>We are very sorry!<br>You don't have any movies<br>at your library.</p>
      <a href="./catalog.html" class="btn-search-more">Search Movie</a>
    </div>
  `}function x(e,t,r,v){if(!e)return;const s=e.querySelector(".custom-select__list"),o=e.querySelector(".custom-select__button"),a=e.querySelector(".custom-select__label");if(!s||!o||!a)return;const m=new Set;d.forEach(n=>{var i;return(i=n.genre_ids)==null?void 0:i.forEach(l=>m.add(l))});const c=document.createElement("li");c.dataset.value="all",c.textContent="All Genres",c.classList.add("selected"),s.appendChild(c),m.forEach(n=>{const i=t.get(n);if(i){const l=document.createElement("li");l.dataset.value=n,l.textContent=i,s.appendChild(l)}}),o.addEventListener("click",n=>{n.stopPropagation(),s.classList.toggle("hide")}),document.addEventListener("click",n=>{e.contains(n.target)||s.classList.add("hide")}),s.addEventListener("click",n=>{const i=n.target.closest("li");if(!i)return;s.querySelectorAll("li").forEach(u=>u.classList.remove("selected")),i.classList.add("selected"),a.textContent=i.textContent,s.classList.add("hide");const l=i.dataset.value;f=1,r.innerHTML="",g=l==="all"?d:d.filter(u=>{var p;return(p=u.genre_ids)==null?void 0:p.includes(Number(l))}),y(r,v)})}async function y(e,t){const r=(f-1)*_,v=r+_,s=g.slice(r,v);v>=g.length?t&&t.classList.add("is-hidden"):t&&t.classList.remove("is-hidden");const o=await Promise.all(s.map(async a=>{var p;const m=((p=a.genre_names)==null?void 0:p.length)>0?a.genre_names:await C(a.genre_ids||[]),c=a.release_date?a.release_date.slice(0,4):"—",n=a.poster_path?`https://image.tmdb.org/t/p/w500${a.poster_path}`:"./img/oops-logo.png",i=(a.vote_average||0).toFixed(1),l=Math.round((a.vote_average||0)/2);let u="";for(let h=1;h<=5;h++)h<=l?u+='<span class="movie-card__star" style="color: orange;">★</span>':u+='<span class="movie-card__star star-empty" style="color: gray;">☆</span>';return`
        <li class="movie-card" data-id="${a.id}">
          <div class="movie-card__thumb">
            <img class="movie-card__img" src="${n}" alt="${a.title}" loading="lazy" />
            <div class="movie-card__overlay">
              <span class="movie-card__rating">${i}</span>
            </div>
          </div>
          <h3 class="movie-card__title">${a.title}</h3>
          <div class="movie-card__meta">
            <p>${m.slice(0,2).join(", ")} | ${c}</p>
            <div class="movie-card__stars">${u}</div>
          </div>
        </li>`}));e.innerHTML+=o.join("")}function b(e,t){if(d=E(),g=[...d],f=1,e.innerHTML="",d.length===0){M(e,t);return}y(e,t)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",L,{once:!0}):L();
//# sourceMappingURL=library.js.map
