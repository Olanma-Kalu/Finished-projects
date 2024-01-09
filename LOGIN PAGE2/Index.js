document.addEventListener('DOMContentLoaded', function() {
  function togglePasswordVisibility(passwordInput, eyeIcon) {
    eyeIcon.addEventListener('click', function() {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('bx-hide');
        eyeIcon.classList.add('bx-show');
      } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('bx-show');
        eyeIcon.classList.add('bx-hide');
      }
    });
  }

  function validateEmail(form, emailInput) {
    form.addEventListener('submit', function(event) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(emailInput.value)) {
        event.preventDefault(); // Prevent form submission
        alert('Email is incorrect. Please provide a valid email.');
      }
    });
  }

  // Login form
  const loginPasswordInput = document.querySelector('.form-login .password');
  const loginEyeIcon = document.querySelector('.form-login .eye-icon');
  const loginEmailInput = document.querySelector('.form-login .input[type="email"]');
  const loginForm = document.querySelector('.form-login');

  togglePasswordVisibility(loginPasswordInput, loginEyeIcon);
  validateEmail(loginForm, loginEmailInput);

  // Signup form
  const signupPasswordInput = document.querySelector('.form-signup .password');
  const signupEyeIcon = document.querySelector('.form-signup .eye-icon');
  const signupEmailInput = document.querySelector('.form-signup .input[type="email"]');
  const signupForm = document.querySelector('.form-signup');

  togglePasswordVisibility(signupPasswordInput, signupEyeIcon);
  validateEmail(signupForm, signupEmailInput);
});
