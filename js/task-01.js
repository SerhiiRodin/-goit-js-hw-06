const itemsRef = document.querySelectorAll('.item');
const numberOfItemsRef = itemsRef.length;
console.log(`Number of categories: ${numberOfItemsRef}` + '\n' + '\n');

itemsRef.forEach(item => {
  const itemTextRef = item.querySelector('h2');
  const itemText = itemTextRef.textContent;
  console.log(`Category: ${itemText}`);

  const categoryRef = item.querySelectorAll('li');
  const numberOfcategoryRef = categoryRef.length;
  console.log(`Elements: ${numberOfcategoryRef}` + '\n' + '\n');
});
