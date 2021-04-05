// Готово

const categoryEl = document.querySelector("#categories").children;
console.log(`В списке ${categoryEl.length} категории.`);

const itemEl = document.querySelector(".item");
const titleEl = itemEl.firstElementChild;
console.log(`Категория: ${titleEl.textContent}`);
console.log(`Количество элементов: ${itemEl.querySelectorAll("li").length}`);

const secondEl = itemEl.nextElementSibling;
console.log(`Категория: ${secondEl.firstElementChild.textContent}`);
console.log(`Количество элементов: ${secondEl.querySelectorAll("li").length}`);

const thirdEl = secondEl.nextElementSibling;
console.log(`Категория: ${thirdEl.firstElementChild.textContent}`);
console.log(`Количество элементов: ${thirdEl.querySelectorAll("li").length}`);