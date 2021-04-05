// Готово

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur() {
if(inputEl.value.length === 6){
inputEl.classList.add('valid');
inputEl.classList.remove('invalid');
}
else {
inputEl.classList.add('invalid');
inputEl.classList.remove('valid');
}
console.log('Потерян фокус');
}
