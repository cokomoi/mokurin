(function(){const h=document.documentElement;const s=localStorage.getItem('mokurin_lang');if(s)h.setAttribute('lang',s);
function setL(l){h.setAttribute('lang',l);localStorage.setItem('mokurin_lang',l);
document.querySelectorAll('.lang-switch button').forEach(b=>b.classList.toggle('passive',b.dataset.lang!==l));}
window._setLang=setL;document.addEventListener('DOMContentLoaded',()=>{
const cur=h.getAttribute('lang')||'ja';document.querySelectorAll('.lang-switch button').forEach(b=>{
b.classList.toggle('passive',b.dataset.lang!==cur);b.addEventListener('click',()=>setL(b.dataset.lang));});});})();