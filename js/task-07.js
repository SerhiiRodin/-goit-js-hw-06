const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onRangeChenge);

function onRangeChenge(event) {
  const rangeValue = event.currentTarget.value;

  spanEl.style.fontSize = `${rangeValue}px`;
}
