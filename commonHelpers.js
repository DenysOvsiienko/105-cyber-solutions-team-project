(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",n),o.closeModalBtn.addEventListener("click",n);function n(){o.modal.classList.toggle("is-open")}})();document.addEventListener("DOMContentLoaded",function(){var o=document.querySelectorAll(".catalog-list-item"),n=document.getElementById("showMoreBtn"),l=4,s=!1;function e(){for(var t=s?o.length:l,r=0;r<o.length;r++)r<t?o[r].classList.add("visible"):o[r].classList.remove("visible")}e(),n.addEventListener("click",function(){s=!s,e(),n.textContent=s?"Show less":"Show more"})});document.getElementById("toggleMenu").addEventListener("click",function(){document.getElementById("mobileMenu").classList.toggle("open")});
//# sourceMappingURL=commonHelpers.js.map
