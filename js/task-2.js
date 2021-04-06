// Готово

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const navEl = document.querySelector('#ingredients');

const ingredienEl = ingredients.map(ingredients => {
  const ingredientsListEl = document.createElement('li');
  ingredientsListEl.textContent = ingredients;

  return ingredientsListEl;
 });
 navEl.append(...ingredienEl);

