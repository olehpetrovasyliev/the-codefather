(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const l=document.querySelectorAll(".my-element");l.forEach(e=>{new IntersectionObserver(r=>{r[0].isIntersecting?e.classList.add("animate"):e.classList.remove("animate")}).observe(e)});const a=document.querySelector(".catalog-button"),i=new IntersectionObserver(e=>{e[0].isIntersecting?a.classList.add("heartbeat"):a.classList.remove("heartbeat")});i.observe(a);window.onscroll=()=>d();function d(){const e=document.querySelector("[data-header]"),n=e.offsetHeight;window.pageYOffset>n?e.classList.add("no-transparency"):e.classList.remove("no-transparency")}(()=>{const e=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),s=()=>{const t=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");const o=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[o](document.body)};n.addEventListener("click",s),r.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(e.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n);function n(){e.modal.classList.toggle("is-hidden")}})();new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},pagination:{el:".swiper-pagination",type:"fraction",renderFraction:function(e,n){return'0<span class="'+e+'"></span>0<span class="'+n+'"></span>'}}});document.addEventListener("click",({target:e})=>{if(e.parentNode.classList.contains("catalog-icon")){const n=[...document.querySelectorAll(".catalog-icon")],r=[...document.querySelectorAll(".catalog-icon")].indexOf(e.parentNode);n[r].classList.toggle("active")}});
