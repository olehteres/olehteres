const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');
const loginForm = document.getElementById('auth_login_modal');
const signupForm = document.getElementById('auth_registration_modal');
const overlay = document.getElementById('for_form_overlay');
const closeButtons = document.querySelectorAll('.auth_container__close');
// Функція для відкриття модального вікна
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    overlay.classList.add('active');
  }
  
  // Функція для закриття модального вікна
  function closeModal() {
    loginForm.classList.remove('active');
    signupForm.classList.remove('active');
    overlay.classList.remove('active');
  }
  
  // Обробники подій для посилань
  loginLink.addEventListener('click', () => {
    openModal('auth_login_modal');
  });
  
  signupLink.addEventListener('click', () => {
    openModal('auth_registration_modal');
  });
  
  // Додаткові обробники подій (за бажанням)
  // Закриття модального вікна по натисканню на оверлей
  overlay.addEventListener('click', closeModal);
  closeButtons.forEach(button => {
    button.addEventListener('click', closeModal);
  });
  // Закриття модального вікна по натисканню на клавішу Esc
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  auth_container__close