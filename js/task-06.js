const inputEl = document.querySelector('#validation-input');
const datasetValue = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onImputBlur);

function onImputBlur(event) {
  const inputTextLength = event.currentTarget.value.length;

  if (inputTextLength === datasetValue) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
