(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const a=document.querySelector(".nav"),i=document.querySelector(".burger-menu"),d=document.querySelector(".header--container"),u=()=>{const t=i.getAttribute("aria-expanded")==="true";i.setAttribute("aria-expanded",!t),a.classList.toggle("is-open"),d.classList.toggle("is-open"),i.classList.toggle("is-open"),i.blur(),document.body.classList.toggle("no-scroll")},g=t=>{const o=window.innerWidth<=1220||document.body.clientWidth<=1220;t.target.classList.contains("nav__link")&&o&&u()},f=()=>{i.addEventListener("click",u),a.addEventListener("click",g),window.matchMedia("(max-width: 1220px)").addEventListener("change",t=>{t.matches||(i.setAttribute("aria-expanded",!1),a.classList.remove("is-open"),d.classList.remove("is-open"),i.classList.remove("is-open"),document.body.classList.remove("no-scroll"))})},l=document.querySelectorAll(".nav__link"),m=(t,o)=>{t.forEach(r=>{const s=r.target.getAttribute("id"),e=document.querySelector(`.nav__link[href="#${s}"]`);r.isIntersecting&&(o.forEach(n=>n.classList.remove("active")),e.classList.add("active"))})},p=(t,o)=>new IntersectionObserver(t,o),v=(t,o)=>{o.forEach(r=>{const s=r.getAttribute("href").substring(1),e=document.getElementById(s);e&&t.observe(e)})},h=(t={})=>{const r={...{rootMargin:"-50px 0px -50% 0px",threshold:0},...t},s=p(e=>m(e,l),r);v(s,l)};document.querySelectorAll(".nav__link");f();h();