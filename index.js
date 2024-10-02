import{i as u,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const a={key:"35721413-e0710a9b17feed22ef75fc503",q:"",imageType:"photo",orientation:"horizontal",safeSearch:"true"},m="https://pixabay.com/api/";function h(r){a.q=r;const t=new URLSearchParams(a).toString();return`${m}/?${t}`}function p(r){return fetch(h(r)).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function y(r){return r.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:s,comments:c,downloads:d})=>`<li class="gallery-card">
                  <a href="${o}">
                    <img class="gallery-img" src="${t}" alt="${i}">
                  </a>
                  <ul class="describe-box">    
                        <li class="item">
                          <h2 class="describe-title">Likes</h2>
                          <p class="describe-text">${e}</p>
                        </li>
                        <li class="item">
                          <h2 class="describe-title">Views</h2>
                          <p class="describe-text">${s}</p>
                        </li>
                        <li class="item">
                          <h2 class="describe-title">Comments</h2>
                        <p class="describe-text">${c}</p>
                        </li>
                        <li class="item">
                          <h2 class="describe-title">Downloads</h2>
                          <p class="describe-text">${d}</p>
                        </li>
                  </ul>
                </li>`).join("")}const n={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".gallery")};n.searchForm.addEventListener("submit",g);function g(r){r.preventDefault();const t=r.currentTarget,{searchtext:o}=t.elements,i=o.value.trim();if(i===""){u.error({title:"Warning",message:"Search query cannot be empty. Please enter a search term.",position:"topRight"});return}n.gallery.innerHTML="",b(),p(i).then(e=>{e.hits.length===0?l():(n.gallery.insertAdjacentHTML("beforeend",y(e.hits)),new f(".gallery a",{}))}).catch(e=>{l()}).finally(()=>{L()})}const b=()=>{const r=document.querySelector(".loader");r.innerHTML='<div class="spinner"></div>',r.style.display="flex"},L=()=>{const r=document.querySelector(".loader");r.style.display="none"};function l(){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}
//# sourceMappingURL=index.js.map
