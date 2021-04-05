// Готово

const inputSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputSizeEl.addEventListener('input', onInputChangeRange);

function onInputChangeRange(event) {
    textEl.style.fontSize = event.currentTarget.value + "px";
};