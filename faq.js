(function() {
  function init() {
    var buttons = document.querySelectorAll('[data-faq-btn]');
    if (!buttons.length) return;

    buttons.forEach(function(btn) {
      if (btn.dataset.bound) return;
      btn.dataset.bound = 'true';

      btn.addEventListener('click', function() {
        var idx = btn.getAttribute('data-faq-idx');
        var panel = document.getElementById('faq-panel-' + idx);
        var icon = btn.querySelector('[data-faq-icon]');
        var isOpen = btn.getAttribute('aria-expanded') === 'true';

        // Close all others first
        buttons.forEach(function(otherBtn) {
          var otherIdx = otherBtn.getAttribute('data-faq-idx');
          var otherPanel = document.getElementById('faq-panel-' + otherIdx);
          var otherIcon = otherBtn.querySelector('[data-faq-icon]');
          otherBtn.setAttribute('aria-expanded', 'false');
          if (otherPanel) otherPanel.style.display = 'none';
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        });

        // Toggle the clicked one
        if (!isOpen) {
          btn.setAttribute('aria-expanded', 'true');
          if (panel) panel.style.display = 'block';
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
