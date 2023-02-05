const formEl = document.querySelector('.login-form');

const result = {};

formEl.addEventListener('submit', onFormElSubmit);

function onFormElSubmit(e) {
  e.preventDefault();

  if (
    formEl.elements.email.value === '' ||
    formEl.elements.password.value === ''
  ) {
    return alert('Всі поля повинні бути заповнені!');
  }

  result.email = formEl.elements.email.value;
  result.password = formEl.elements.password.value;

  console.log(result);

  formEl.reset();
}
