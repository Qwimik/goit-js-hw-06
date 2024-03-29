const categoriesEl = document.querySelector('#categories');

console.log(`Number of categories: ${categoriesEl.children.length}`);

const itemsEl = categoriesEl.querySelectorAll('.item');

console.log(
  itemsEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  })
);
