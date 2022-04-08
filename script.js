const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const pwd = document.getElementById('password');
const pwdConfirm = document.getElementById('confirm-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

const checkInputs = () => {
  // GET VALUES FROM INPUTS
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const pwdValue = pwd.value.trim();
  const pwdConfirmValue = pwdConfirm.value.trim();

  if (usernameValue === '') {
    setError(username, 'Username cannot be blank');
  } else if (usernameValue.length < 3) {
    setError(username, 'Username must be at least 3 characters long');
  } else {
    setSuccess(username);
  }

  if (emailValue === '') {
    setError(email, 'Email cannot be blank');
  } else {
    setSuccess(email);
  }

  if (pwdValue === '') {
    setError(pwd, 'Password cannot be blank');
  } else if (pwdValue.length < 6 || pwdValue.length > 20) {
    setError(pwd, 'Password must contain between 6 and 20 characters')
  } else if (pwdValue.match(/[A-Z]/) === null) {
    setError(pwd, 'Password must contain a capital letter')
  } else if (pwdValue.match(/[1-9]/) === null) {
    setError(pwd, 'Password must contain a number')
  } else {
    setSuccess(pwd);
  }

  if (pwdConfirmValue !== pwdValue) {
    setError(pwdConfirm, 'Doesn\'t match Password')
  } else {
    setSuccess(pwdConfirm);
  }

};

const setError = (input, message) => {
  input.classList.add('error');
  input.parentNode.childNodes[9].innerText = message;
};

const setSuccess = (input) => {
  input.classList.add('success');

  if (input.classList.contains('error')) {
    input.classList.remove('error');
  }

  input.parentNode.childNodes[9].innerText = '';
};