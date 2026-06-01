(function() {
  function initForm() {
    var form = document.getElementById('insc-form');
    var formContainer = document.getElementById('insc-form-container');
    var successDiv = document.getElementById('insc-success');
    var successTitle = document.getElementById('insc-success-title');
    var successMsg = document.getElementById('insc-success-msg');
    var emailError = document.getElementById('insc-email-error');
    
    if (!form) return;
    if (form.dataset.inscBound) return;
    form.dataset.inscBound = 'true';
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var nameEl = document.getElementById('insc-name');
      var emailEl = document.getElementById('insc-email');
      if (!nameEl || !emailEl) return;
      
      var name = nameEl.value.trim();
      var email = emailEl.value.trim();
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!name || !email) return;
      if (!emailRegex.test(email)) {
        if (emailError) emailError.style.display = 'block';
        return;
      }
      if (emailError) emailError.style.display = 'none';
      
      if (formContainer) formContainer.style.display = 'none';
      if (successDiv) {
        successDiv.style.display = 'flex';
      }
      if (successTitle) successTitle.textContent = 'Gracias, ' + name + '!';
      if (successMsg) successMsg.textContent = name + ', te contactamos en las proximas horas con toda la informacion sobre Mini Chefs.';
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForm);
  } else {
    initForm();
  }
})();
