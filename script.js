const menu=document.getElementById('menu'), links=document.getElementById('links');
menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();

// Apple-inspired scroll reveal: sections and cards enter smoothly as they reach the viewport.
const revealTargets=document.querySelectorAll('.section > .eyebrow,.section h2,.about-grid,.stats,.skill,.project,.timeline article,.cert-grid > div,.contact-inner');
revealTargets.forEach((el,i)=>{el.classList.add('reveal');el.style.setProperty('--delay',`${(i%4)*90}ms`);});
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.13,rootMargin:'0px 0px -35px 0px'});
 revealTargets.forEach(el=>observer.observe(el));
}else{revealTargets.forEach(el=>el.classList.add('visible'));}
