const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const onInputChange = event => {
  spanEl.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous';
};

inputEl.addEventListener('input', onInputChange);
