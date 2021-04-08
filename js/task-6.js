// Готово

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur() {
if(inputEl.value.length == inputEl.dataset.length){
inputEl.classList.add('valid');
inputEl.classList.remove('invalid');
}
else {
inputEl.classList.add('invalid');
inputEl.classList.remove('valid');
}
console.log('Потерян фокус');
}


// 2 Вариант

// const inputValid = document.querySelector('#validation-input');
// inputValid.addEventListener('blur', () => {
//     const inputTextLength = inputValid.value.length;
//     const maxLength = inputValid.getAttribute('data-length');
//     if (inputTextLength > maxLength || inputTextLength < maxLength) {
//      inputValid.classList.add('invalid');
//     }  else {
//         inputValid.classList.add('valid')
//         inputValid.classList.remove('invalid');
//     }         
// })