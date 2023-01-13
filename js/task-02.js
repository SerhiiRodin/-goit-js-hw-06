const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liElements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = ingredients[i];

  const liEl = document.createElement("li");  
  liEl.textContent = ingredient;
  liEl.classList.add("item");

  liElements.push(liEl);
}

const ulEl = document.querySelector('#ingredients');

ulEl.append(...liElements);




