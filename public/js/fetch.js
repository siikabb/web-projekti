'use strict';

const idsInCart = [];
let token = '';

const login = document.getElementById('user-login');
login.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log(login.elements);

  const url = '../auth/login';
  const email = document.querySelector('#login-email');
  const password = document.querySelector('#login-password');

  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      token = data.token;
      console.log(token);
      console.log(data.user.email);
      // TODO: print this where relevant
    });
});

const register = document.getElementById('user-register');
register.addEventListener('submit', async (event) => {
  event.preventDefault();

  const url = '../users/';
  const email = document.querySelector('#register-email');
  const password = document.querySelector('#register-password');
  console.log('register');

  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  }).then((response) => console.log(response));
});

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
  const dt = document.createElement('dt');
  dt.insertAdjacentHTML(
    'beforeend',
    `${product.name} - <span class="price">${product.price} €</span> `
  );
  const button = document.createElement('button');
  button.classList.add('add-btn');
  button.textContent = '+';
  const dd = document.createElement('dd');
  dd.textContent = product.description;
  //     `<dt>${product.name} - <span class="price">${product.price} €</span> <button
  // class="add-btn">+</button></dt>
  // <dd>${product.description}</dd>`
  //   );

  button.addEventListener('click', () => {
    console.log('add button');
    const itemName = button.parentElement.firstChild.textContent
      .trim()
      .replace(/-/g, '');
    console.log(itemName);
    const itemPrice = parseFloat(
      button.parentElement.querySelector('.price').textContent.replace('$', '')
    );
    console.log(itemPrice);

    addItem(itemName, itemPrice);
    idsInCart.push(product.product_id);
    console.log(idsInCart);
  });
  dt.appendChild(button);
  target.appendChild(dt);
  target.appendChild(dd);
}

const shoppingCart = document.querySelector('.shopping-cart');
const addButtons = document.querySelectorAll('.add-btn');
const orderButton = document.querySelector('.order-button');

// Adding an item to the shopping cart
const addItem = (itemName, itemPrice) => {
  const newItem = document.createElement('ul');
  newItem.classList.add('item');

  const itemNameElement = document.createElement('li');
  itemNameElement.classList.add('item-name');
  itemNameElement.textContent = itemName;

  const itemPriceElement = document.createElement('li');
  itemPriceElement.classList.add('item-price');
  itemPriceElement.textContent = '$' + itemPrice.toFixed(2);

  newItem.appendChild(itemNameElement);
  newItem.appendChild(itemPriceElement);

  shoppingCart.appendChild(newItem);
};

// // Check if addButton is clicked
// addButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     console.log('add button');
//     const itemName = button.parentElement.firstChild.textContent
//       .trim()
//       .replace(/-/g, '');
//     console.log(itemName);
//     const itemPrice = parseFloat(
//       button.parentElement.querySelector('.price').textContent.replace('$', '')
//     );
//     console.log(itemPrice);

//     addItem(itemName, itemPrice);
//   });
// });
