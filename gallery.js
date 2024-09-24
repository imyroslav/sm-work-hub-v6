import{S as c}from"./assets/vendor-CgTBfC_f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const s=[{preview:"./img/preview-object-1.jpg",original:"./img/original-object-1.jpg",description:"Hokkaido Flower"},{preview:"./img/preview-object-2.jpg",original:"./img/original-object-2.jpg",description:"Container Haulage Freight"},{preview:"./img/preview-object-3.jpg",original:"./img/original-object-3.jpg",description:"Aerial Beach View"}],a=document.querySelector("ul.gallery"),p=s.map(i=>`<li class="gallery-item">
<a class="gallery-link" href="${i.original}">
<img 
class="gallery-image"
src="${i.preview}"
alt="${i.description}"> 
</a>
</li>`).join("");a.insertAdjacentHTML("beforeend",p);new c(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=gallery.js.map
