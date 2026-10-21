const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Fechar ✕' : '☰ Menu';
  });
}
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = document.getElementById(button.getAttribute('aria-controls'));
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    answer.hidden = expanded;
    const icon = button.querySelector('.faq-plus');
    if (icon) icon.textContent = expanded ? '+' : '−';
  });
});
const countdown = document.querySelector('[data-countdown]');
if (countdown) {
  const eventDate = new Date('2026-11-15T09:00:00-03:00').getTime();
  const update = () => {
    const diff = eventDate - Date.now();
    if (diff <= 0) {
      countdown.innerHTML = '<div class="time-box" style="min-width:220px"><strong>Chegou o dia!</strong><span>Etapa Freedom 2026</span></div>';
      return;
    }
    const units = [
      ['days', Math.floor(diff / 86400000)],
      ['hours', Math.floor((diff % 86400000) / 3600000)],
      ['minutes', Math.floor((diff % 3600000) / 60000)],
      ['seconds', Math.floor((diff % 60000) / 1000)]
    ];
    units.forEach(([key, value]) => {
      const el = countdown.querySelector(`[data-${key}]`);
      if (el) el.textContent = String(value).padStart(2, '0');
    });
  };
  update();
  setInterval(update, 1000);
}
const backTop = document.querySelector('.back-top');
if (backTop) {
  window.addEventListener('scroll', () => backTop.classList.toggle('show', window.scrollY > 450));
  backTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
}
const participantSearch = document.querySelector('#participant-search');
if (participantSearch) {
  participantSearch.addEventListener('input', () => {
    const message = document.querySelector('#participant-search-message');
    message.textContent = 'A lista pública oficial de participantes não foi disponibilizada neste site. Consulte sua inscrição na plataforma oficial.';
  });
}
