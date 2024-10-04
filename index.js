import{i as u,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const l={key:"35721413-e0710a9b17feed22ef75fc503",q:"",imageType:"photo",orientation:"horizontal",safeSearch:"true"},d="https://pixabay.com/api/";function h(s){l.q=s;const r=new URLSearchParams(l).toString();return`${d}/?${r}`}function p(s){return fetch(h(s)).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function y(s){return s.map(({webformatURL:r,largeImageURL:c,tags:i,likes:e,views:t,comments:a,downloads:m})=>`<li class="gallery-card">
                  <a href="${c}">
                    <img class="gallery-img" src="${r}" alt="${i}">
                  </a>
                  <ul class="describe-box">    
                        <li class="item">
                          <h2 class="describe-title">Likes</h2>
                          <p class="describe-text">${e}</p>
                        </li>
                        <li class="item">
                          <h2 class="describe-title">Views</h2>
                          <p class="describe-text">${t}</p>
                        </li>
                        <li class="item">
                          <h2 class="describe-title">Comments</h2>
                        <p class="describe-text">${a}</p>
                        </li>
                        <li class="item">
                          <h2 class="describe-title">Downloads</h2>
                          <p class="describe-text">${m}</p>
                        </li>
                  </ul>
                </li>`).join("")}const o={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".js-loader")};o.searchForm.addEventListener("submit",g);function g(s){s.preventDefault();const r=s.currentTarget,{searchtext:c}=r.elements,i=c.value.trim();if(i===""){u.error({title:"Warning",message:"Search query cannot be empty. Please enter a search term.",position:"topRight"});return}o.gallery.innerHTML="",o.loader.classList.add("isVisible"),p(i).then(e=>{e.hits.length===0?n():(o.gallery.insertAdjacentHTML("beforeend",y(e.hits)),new f(".gallery a",{}))}).catch(e=>{n()}).finally(()=>{o.loader.classList.remove("isVisible"),o.searchForm.reset()})}function n(){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}
//# sourceMappingURL=index.js.map
