(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",n),o.closeModalBtn.addEventListener("click",n);function n(){o.modal.classList.toggle("is-open")}})();document.getElementById("toggleMenu").addEventListener("click",function(){document.getElementById("mobileMenu").classList.toggle("open")});var m=document.querySelectorAll(".menu-nav-link"),h=document.querySelector(".menu"),v=document.querySelector(".menu-close-btn");function d(){h.classList.remove("is-open")}v.addEventListener("click",function(){d()});m.forEach(function(o){o.addEventListener("click",function(){d()})});document.addEventListener("DOMContentLoaded",function(){var o=document.querySelectorAll(".catalog-list-item"),n=document.getElementById("showMoreBtn"),s=4,r=!1;function e(){for(var t=r?o.length:s,c=0;c<o.length;c++)c<t?o[c].classList.add("visible"):o[c].classList.remove("visible")}e(),n.addEventListener("click",function(){r=!r,e(),n.textContent=r?"Show less":"Show more"})});document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",function(n){n.preventDefault();const s=this.getAttribute("href"),r=document.querySelector(s);r&&window.scrollTo({top:r.offsetTop,behavior:"smooth"})})});window.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".header-menu-link"),n=document.querySelectorAll(".menu-nav-link");function s(e){let t=window.pageYOffset;e.forEach(c=>{const a=c.getAttribute("href").substring(1),i=document.getElementById(a);if(i){const l=i.offsetTop-100,u=i.clientHeight;t>=l&&t<=l+u&&(e.forEach(f=>{f.classList.remove("active")}),c.classList.add("active"))}})}window.addEventListener("scroll",function(){s(o),s(n)});const r=document.querySelector('.header-menu-link[href="#hero"]');r&&r.addEventListener("click",function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})});
//# sourceMappingURL=commonHelpers.js.map