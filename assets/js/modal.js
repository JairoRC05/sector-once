
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('mobileMenuBtn');
    const modal = document.querySelector('.mobile-menu-modal');
    const backdrop = document.querySelector('.modal-backdrop');

    function openMenu() {
      modal.classList.add('show');
      backdrop.classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      modal.classList.remove('show');
      backdrop.classList.remove('show');
      document.body.style.overflow = '';
    }

    btn.addEventListener('click', openMenu);
    backdrop.addEventListener('click', closeMenu);
    document.querySelector('.modal-close').addEventListener('click', closeMenu);

    // Cierra con Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeMenu();
    });

    // Cierra al hacer clic en un enlace (opcional, para mejor UX)
    document.querySelectorAll('.modal-nav a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  });
