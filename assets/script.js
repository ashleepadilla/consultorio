// Año dinámico
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const nav = document.getElementById('mainNav');
const burger = document.querySelector('.hamburger');
if (burger && nav){
  burger.addEventListener('click', () => {
    const expanded = nav.getAttribute('aria-expanded') === 'true';
    nav.setAttribute('aria-expanded', String(!expanded));
    burger.setAttribute('aria-expanded', String(!expanded));
  });
}

// Dropdown (Acerca)
const dropdown = document.querySelector('.dropdown');
if (dropdown){
  const dropToggle = dropdown.querySelector('.dropdown-toggle');
  if (dropToggle){
    dropToggle.addEventListener('click', (e) => {
      e.preventDefault();
      const expanded = dropdown.getAttribute('aria-expanded') === 'true';
      dropdown.setAttribute('aria-expanded', String(!expanded));
    });
  }
  document.addEventListener('click', (e) => {
    if(!dropdown.contains(e.target)) dropdown.setAttribute('aria-expanded','false');
  });
}

// Tabs (Aula Eunoia)
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const target = document.querySelector(tab.dataset.target);
    if(target) target.classList.add('active');
  });
});

// Contact form (demo)
const form = document.getElementById('contactForm');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    const body = encodeURIComponent(`Nombre: ${data.nombre}\nCorreo: ${data.email}\nMotivo: ${data.motivo}\nMensaje: ${data.mensaje}`);
    window.location.href = `mailto:contacto@eunoia.example?subject=Consulta desde el sitio&body=${body}`;
  });
}