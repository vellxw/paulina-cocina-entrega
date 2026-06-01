(function() {
  function init() {
    var btn = document.getElementById('benefits-load-more');
    if (!btn) return;
    if (btn.dataset.bound) return;
    btn.dataset.bound = 'true';

    btn.addEventListener('click', function() {
      var items = document.querySelectorAll('[data-benefit-item]');
      for (var i = 0; i < items.length; i++) {
        items[i].style.display = 'flex';
      }

      var bar = document.getElementById('benefits-progress-bar');
      if (bar) bar.style.width = '100%';

      var status = document.getElementById('benefits-status');
      if (status) status.textContent = 'Estas viendo ' + items.length + ' de ' + items.length;

      var wrapper = document.getElementById('benefits-load-more-wrapper');
      if (wrapper) wrapper.style.display = 'none';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
