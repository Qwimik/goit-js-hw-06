const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (inputEl.value.length === 0) {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
  } else if (inputEl.value.length < Number(inputEl.dataset.length)) {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
}
