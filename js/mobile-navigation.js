document.addEventListener('DOMContentLoaded',function(){
 const button=document.querySelector('.mobile-menu-toggle');
 const nav=document.getElementById('mobile-navigation');
 if(button&&nav){
  function closeMenu(){nav.classList.remove('is-open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Ouvrir le menu');}
  button.addEventListener('click',function(){const open=button.getAttribute('aria-expanded')!=='true';nav.classList.toggle('is-open',open);button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');});
  nav.addEventListener('click',function(e){if(e.target.closest('a'))closeMenu();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu();});
  document.addEventListener('click',function(e){if(!button.contains(e.target)&&!nav.contains(e.target))closeMenu();});
 }
 const arrow=document.querySelector('.back-to-top');const footer=document.querySelector('footer');
 if(arrow&&footer&&'IntersectionObserver' in window){
  const observer=new IntersectionObserver(function(entries){arrow.classList.toggle('footer-visible',entries[0].isIntersecting);},{threshold:0});observer.observe(footer);
 }
});
