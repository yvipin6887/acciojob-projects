const errors = {};

const emailInput = document.getElementsByName('email')[0];
const passwordInput = document.getElementsByName('password')[0];
const submitBtn = document.getElementById('submit');

emailInput.addEventListener('keyup', () => {
  const email = emailInput.value.trim();

  if (email.length < 4 || !email.includes('@') || !email.includes('.')) {
    errors.email = 'Email must be more than 3 characters and contain "@" and "."';
  } else {
    delete errors.email;
  }

  valid();
});

passwordInput.addEventListener('keyup', () => {
  const password = passwordInput.value.trim();

  if (password.length < 8) {
    errors.password = 'Password must be more than 8 characters.';
  } else {
    delete errors.password;
  }

  valid();
});

submitBtn.addEventListener('click', function (e) {
  e.preventDefault(); 

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email) errors.email = 'Email should not be blank';
  if (!password) errors.password = 'Password should not be blank';

  if (!valid()) return;

  delete errors.email;
  delete errors.password;

  if (confirm('Are you sure you want to submit?')) {
    alert('Form submitted successfully!');
  }
});

function valid() {
  document.querySelectorAll('.error').forEach(el => el.innerText = '');

  if (Object.keys(errors).length > 0) {
    for (let field in errors) {
      const errorEl = document.querySelector(`.${field}.error`);
      if (errorEl) {
        showValidation(errorEl, errors[field]);
      }
    }
    return false;
  }

  const successEl = document.querySelector('.success.error');
  if (successEl) {
    showValidation(successEl, 'All good to go!');
  }
  return true;
}

function showValidation(el, message = '') {
  el.innerText = message;
}
