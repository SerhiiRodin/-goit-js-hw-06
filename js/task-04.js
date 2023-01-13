let counterValue = 0;
const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector('#value');

btnDecrementEl.addEventListener('click', hendleDecrement);

function hendleDecrement() {
  counterValue -= 1;
  spanEl.textContent = counterValue;
}

btnIncrementEl.addEventListener('click', hendleIncrement);

function hendleIncrement() {
  counterValue += 1;
  spanEl.textContent = counterValue;
}
