function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);

let divWidth = 20;

function createBoxes(amount) {
  let divEl = '';

  for (let i = 1; i <= amount.target.previousElementSibling.value; i++) {
    divWidth += 10;
    divEl += `<div style="background-color: ${getRandomHexColor()}; width: ${divWidth}px; height: ${divWidth}px;"></div>`;
  }
  boxesEl.insertAdjacentHTML('beforeend', divEl);
}

function destroyBoxes() {
  divWidth = 20;
  boxesEl.innerHTML = '';
}
