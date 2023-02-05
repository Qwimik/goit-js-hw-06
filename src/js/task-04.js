const counterValueEl = document.querySelector('#value');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;
const stepCount = 1;

decrementBtnEl.addEventListener('click', onClickBtn);
incrementBtnEl.addEventListener('click', onClickBtn);

function onClickBtn(e) {
  if (e.currentTarget.dataset.action === 'decrement') {
    counterValue -= stepCount;
  }
  if (e.currentTarget.dataset.action === 'increment') {
    counterValue += stepCount;
  }
  counterValueEl.textContent = counterValue;
}
