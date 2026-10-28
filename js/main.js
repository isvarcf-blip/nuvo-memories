// =========================================================
// NUVÓ MEMORIES: Lógica del sitio
// Este archivo no necesitas editarlo. Toda tu edición
// de contenido se hace en js/config.js y js/data.js
// =========================================================

(function () {
  // ---------- WhatsApp links ----------
  const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensajeWhatsapp)}`;
  document.querySelectorAll('[data-whatsapp]').forEach(el => el.setAttribute('href', waUrl));

  // ---------- Contacto en footer ----------
  const contactoWrap = document.getElementById('contacto-wrap');
  if (contactoWrap) {
    const items = [];
    if (CONFIG.whatsapp) items.push(`<a href="${waUrl}" target="_blank" rel="noopener">WhatsApp</a>`);
    if (CONFIG.instagram) items.push(`<a href="https://instagram.com/${CONFIG.instagram}" target="_blank" rel="noopener">@${CONFIG.instagram}</a>`);
    if (CONFIG.email) items.push(`<a href="mailto:${CONFIG.email}">${CONFIG.email}</a>`);
    if (CONFIG.ciudad) items.push(`<span>${CONFIG.ciudad}</span>`);
    contactoWrap.innerHTML = items.join('');
  }

  // ---------- Filtros + grid de eventos ----------
  const filtrosWrap = document.getElementById('filtros');
  const grid = document.getElementById('eventos-grid');

  function renderEventos(filtro = 'todos') {
    grid.innerHTML = '';
    Object.entries(EVENTOS).forEach(([key, ev]) => {
      if (filtro !== 'todos' && filtro !== key) return;

      const tieneFotos = ev.fotos && ev.fotos.length > 0;

      if (tieneFotos) {
        ev.fotos.forEach(archivo => {
          const esVideo = /\.(mp4|mov|webm)$/i.test(archivo);
          const card = document.createElement('div');
          card.className = 'evento-card' + (esVideo ? ' es-video' : '');
          card.dataset.categoria = key;
          const media = esVideo
            ? `<video class="foto" src="img/${key}/${archivo}" preload="metadata" controls playsinline muted></video>`
            : `<img class="foto" src="img/${key}/${archivo}" alt="${ev.titulo}" loading="lazy">`;
          card.innerHTML = `
            ${media}
            <div class="overlay">
              <h3>${ev.titulo}</h3>
              <p>${ev.descripcion}</p>
            </div>
          `;
          grid.appendChild(card);
        });
      } else {
        const card = document.createElement('div');
        card.className = 'evento-card';
        card.dataset.categoria = key;
        card.innerHTML = `
          <div class="placeholder">
            <div class="emoji">${ev.emoji}</div>
            <h3>${ev.titulo}</h3>
            <p style="font-size:0.9rem; color: var(--texto-suave); margin: 8px 0 14px;">${ev.descripcion}</p>
            <small>Próximamente. Agrega fotos a <br>img/${key}/</small>
          </div>
        `;
        grid.appendChild(card);
      }
    });
  }

  // Construir filtros (sin "Todos": se muestra solo una categoría a la vez)
  const claves = Object.keys(EVENTOS);
  const primeraClave = claves[0];

  if (filtrosWrap) {
    const botones = Object.entries(EVENTOS).map(([key, ev]) => ({ key, label: ev.titulo }));
    filtrosWrap.innerHTML = botones.map((b, i) =>
      `<button class="filtro ${i === 0 ? 'activo' : ''}" data-filtro="${b.key}">${b.label}</button>`
    ).join('');

    filtrosWrap.addEventListener('click', e => {
      const btn = e.target.closest('.filtro');
      if (!btn) return;
      filtrosWrap.querySelectorAll('.filtro').forEach(f => f.classList.remove('activo'));
      btn.classList.add('activo');
      renderEventos(btn.dataset.filtro);
    });
  }

  renderEventos(primeraClave);

  // ---------- Proceso ----------
  const procesoGrid = document.getElementById('proceso-grid');
  if (procesoGrid) {
    procesoGrid.innerHTML = PROCESO.map(p => `
      <div class="paso">
        <div class="numero">${p.numero}</div>
        <h3>${p.titulo}</h3>
        <p>${p.texto}</p>
      </div>
    `).join('');
  }

  // ---------- Personalización ----------
  const customGrid = document.getElementById('custom-grid');
  if (customGrid) {
    customGrid.innerHTML = PERSONALIZACION.map(c => `
      <div class="custom-card">
        <div class="icono">${c.icono}</div>
        <h3>${c.titulo}</h3>
        <p>${c.texto}</p>
      </div>
    `).join('');
  }

  // ---------- FAQs ----------
  const faqsWrap = document.getElementById('faqs');
  if (faqsWrap) {
    faqsWrap.innerHTML = FAQS.map(f => `
      <div class="faq">
        <button class="faq-pregunta">
          <span>${f.pregunta}</span>
          <span class="flecha">+</span>
        </button>
        <div class="faq-respuesta"><p style="padding-top: 4px;">${f.respuesta}</p></div>
      </div>
    `).join('');

    faqsWrap.addEventListener('click', e => {
      const btn = e.target.closest('.faq-pregunta');
      if (!btn) return;
      btn.parentElement.classList.toggle('abierta');
    });
  }

  // ---------- Menú móvil ----------
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }
})();
