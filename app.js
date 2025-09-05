(function(){
  const html = document.documentElement;
  const stored = localStorage.getItem('mokurin_lang');
  if (stored) html.setAttribute('lang', stored);
  function setLang(l){
    html.setAttribute('lang', l);
    localStorage.setItem('mokurin_lang', l);
    document.querySelectorAll('.lang-switch button').forEach(btn=>{
      btn.classList.toggle('passive', btn.dataset.lang !== l);
    });
  }
  window._setLang = setLang;
  document.addEventListener('DOMContentLoaded', () => {
    const current = html.getAttribute('lang') || 'ja';
    document.querySelectorAll('.lang-switch button').forEach(btn=>{
      btn.classList.toggle('passive', btn.dataset.lang !== current);
      btn.addEventListener('click', ()=> setLang(btn.dataset.lang));
    });
  });
})();