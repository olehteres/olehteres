const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');
const loginForm = document.getElementById('auth_login_modal');
const signupForm = document.getElementById('auth_registration_modal');
const overlay = document.getElementById('for_form_overlay');
const closeButtons = document.querySelectorAll('.auth_container__close');
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    overlay.classList.add('active');
  }
  

  function closeModal() {
    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
    overlay.classList.remove('active');
  }
  

  loginLink.addEventListener('click', () => {
    openModal('auth_login_modal');
  });
  
  signupLink.addEventListener('click', () => {
    openModal('auth_registration_modal');
  });

  overlay.addEventListener('click', closeModal);
  closeButtons.forEach(button => {
    button.addEventListener('click', closeModal);
  });
 
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  auth_container__close