'use strict';

const appetizerContainer = document.querySelector('#appetizers');
const drinkContainer = document.querySelector('#drinks');
const mainCourseContainer = document.querySelector('#main-courses');

const products = await fetch(`/products/`, {
  method: 'GET',
}).then((response) => response.json());

console.log(products);

for (const product of products) {
  let target = null;
  if (product.type === 0) {
    target = mainCourseContainer;
  } else if (product.type === 1) {
    target = drinkContainer;
  } else if (product.type === 2) {
    target = appetizerContainer;
  }
  target.insertAdjacentHTML(
    'beforeend',
    `<dt>${product.name} - <span class="price">${product.price} €</span> <button
class="add-btn">+</button></dt>
<dd>${product.description}</dd>`
  );
}
