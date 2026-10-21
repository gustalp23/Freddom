(() => {
  'use strict';
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('#main-nav');
  if(toggle&&nav){
    const close=()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');};
    toggle.addEventListener('click',()=>{const opened=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(opened));});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  }
  document.querySelectorAll('.faq-question').forEach(button=>{
    button.addEventListener('click',()=>{
      const answer=document.getElementById(button.getAttribute('aria-controls'));if(!answer)return;
      const was=button.getAttribute('aria-expanded')==='true';
      button.setAttribute('aria-expanded',String(!was));answer.hidden=was;
      const sign=button.querySelector('b');if(sign)sign.textContent=was?'+':'−';
    });
  });
  const timer=document.querySelector('[data-countdown]');
  if(timer){
    const target=new Date('2026-11-15T09:00:00-03:00').getTime();
    const update=()=>{
      const diff=Math.max(0,target-Date.now());
      if(diff===0){timer.innerHTML='<span class="countdown-complete">CHEGOU O GRANDE DIA!</span>';return true;}
      const values={days:Math.floor(diff/86400000),hours:Math.floor(diff%86400000/3600000),minutes:Math.floor(diff%3600000/60000),seconds:Math.floor(diff%60000/1000)};
      Object.entries(values).forEach(([name,value])=>{const el=timer.querySelector('[data-'+name+']');if(el)el.textContent=String(value).padStart(2,'0');});return false;
    };
    if(!update()){const interval=setInterval(()=>{if(update())clearInterval(interval);},1000);}
  }
  const back=document.querySelector('.back-to-top');
  if(back){const update=()=>back.classList.toggle('visible',window.scrollY>550);window.addEventListener('scroll',update,{passive:true});update();back.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));}
})();