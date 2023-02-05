const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange() {
  nameEl.textContent = inputEl.value;

  if (inputEl.value === '') {
    nameEl.textContent = 'Anonymous';
  }
}
