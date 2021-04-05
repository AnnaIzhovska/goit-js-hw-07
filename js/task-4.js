// Готово

const counter = {
    counterValue: 0,
    increment(){
        this.counterValue += 1
    },
    decrement (){
        this.counterValue -= 1
    },
}

const decrementBtn = document.querySelector('.decrement');
const incrementBtn = document.querySelector('.increment');
const valueEl = document.querySelector('.value');

decrementBtn.addEventListener('click', function () {
    console.log('Кликнули по декременту')
    counter.decrement();
    valueEl.textContent = counter.counterValue;
    
 });

 incrementBtn.addEventListener('click', function () {
    console.log('Кликнули по инкременту')
    counter.increment();
    valueEl.textContent = counter.counterValue;
});