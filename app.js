(function(){
  const html=document.documentElement;
  const saved=localStorage.getItem('mokurin_lang'); if(saved) html.setAttribute('lang', saved);
  function setLang(l){ html.setAttribute('lang', l); localStorage.setItem('mokurin_lang', l);
    document.querySelectorAll('.lang-switch button').forEach(b=>b.classList.toggle('passive', b.dataset.lang!==l));
  }
  window._setLang=setLang;
  document.addEventListener('DOMContentLoaded',()=>{
    const cur=html.getAttribute('lang')||'ja';
    document.querySelectorAll('.lang-switch button').forEach(b=>{
      b.classList.toggle('passive', b.dataset.lang!==cur);
      b.addEventListener('click',()=>setLang(b.dataset.lang));
    });
    const links=[...document.querySelectorAll('nav a[href^="#"]')];
    function onScroll(){
      const y=window.scrollY+90;
      links.forEach(a=>a.classList.remove('active'));
      document.querySelectorAll('section.anchor').forEach(sec=>{
        const top=sec.offsetTop, bottom=top+sec.offsetHeight;
        if(y>=top && y<bottom){
          const id='#'+sec.id;
          const match=links.find(a=>a.getAttribute('href')===id);
          if(match) match.classList.add('active');
        }
      });
    }
    document.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  });
})();
