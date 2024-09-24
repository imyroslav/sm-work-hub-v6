import{S as n}from"./assets/vendor-CgTBfC_f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const s=[{preview:"./img/preview-object-1.jpg",original:"./img/original-object-1.jpg",description:"Object-1"},{preview:"./img/preview-object-2.jpg",original:"./img/original-object-2.jpg",description:"Object-2"},{preview:"./img/preview-object-3.jpg",original:"./img/original-object-3.jpg",description:"Object-3"}],a=document.querySelector("ul.gallery"),p=s.map(i=>`<li class="gallery-item">
<a class="gallery-link" href="${i.original}">
<img 
class="gallery-image"
src="${i.preview}"
alt="${i.description}"> 
</a>
</li>`).join("");a.insertAdjacentHTML("beforeend",p);new n(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=gallery.js.map
