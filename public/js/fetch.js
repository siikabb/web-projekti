'use strict';

const idsInCart = [];
let token = '';

const modal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');

const login = document.getElementById('user-login');
login.addEventListener('submit', async (event) => {
  event.preventDefault();

  const url = '../auth/login';
  const email = document.querySelector('#login-email');
  const password = document.querySelector('#login-password');
  try {
    await fetch(url, {
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
        token = data.token;
        document.querySelector('.email').textContent =
          'Welcome in ' + data.user.email;
      });
    showNotification('Logged in successfully!');
    modal.style.display = 'none';
  } catch (e) {
    console.log(e);
    showNotification('Invalid email and/or password');
  }
});

const register = document.getElementById('user-register');
register.addEventListener('submit', async (event) => {
  event.preventDefault();

  const url = '../users/';
  const email = document.querySelector('#register-email');
  const password = document.querySelector('#register-password');

  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    }).then((response) => {
      console.log(response);
    });
    showNotification('Registration successful!');
    registerModal.style.display = 'none';
  } catch (e) {
    console.log(e);
    showNotification('Invalid email and/or password');
  }
});

const appetizerContainer = document.querySelector('#appetizers');
const drinkContainer = document.querySelector('#drinks');
const mainCourseContainer = document.querySelector('#main-courses');

const products = await fetch(`/products/`, {
  method: 'GET',
}).then((response) => response.json());

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
  dt.insertAdjacentHTML('beforeend', `${product.name}`);
  if (product.diets === 'vegan') {
    dt.insertAdjacentHTML('beforeend', ' <span class="vegan">(Vegan)</span>');
  }
  dt.insertAdjacentHTML(
    'beforeend',
    ` - <span class="price">${product.price} €</span> `
  );
  const button = document.createElement('button');
  button.classList.add('add-btn');
  button.textContent = '+';
  const dd = document.createElement('dd');
  dd.textContent = product.description;

  button.addEventListener('click', () => {
    const itemName = button.parentElement.firstChild.textContent
      .trim()
      .replace(/-/g, '');
    const itemPrice = parseFloat(
      button.parentElement.querySelector('.price').textContent.replace('$', '')
    );

    addItem(itemName, itemPrice, product.product_id);
    idsInCart.push(product.product_id);
    showNotification('Item added to the cart!');
  });
  dt.appendChild(button);
  target.appendChild(dt);
  target.appendChild(dd);
}

const shoppingCart = document.querySelector('.shopping-cart');
const addButtons = document.querySelectorAll('.add-btn');
const orderButton = document.querySelector('.order-button');

// Adding an item to the shopping cart
const addItem = (itemName, itemPrice, itemId) => {
  const newItem = document.createElement('ul');
  newItem.classList.add('item');

  const itemNameElement = document.createElement('li');
  itemNameElement.classList.add('item-name');
  itemNameElement.textContent = itemName;

  const itemPriceElement = document.createElement('li');
  itemPriceElement.classList.add('item-price');
  itemPriceElement.textContent = itemPrice.toFixed(2) + ' €';

  const itemDeleteElement = document.createElement('li');
  itemDeleteElement.classList.add('delete-item');
  itemDeleteElement.textContent = '-';

  // Delete button
  itemDeleteElement.addEventListener('click', () => {
    newItem.remove();
    const index = idsInCart.indexOf(itemId);
    if (index > -1) {
      idsInCart.splice(index, 1);
    }
  });

  newItem.appendChild(itemNameElement);
  newItem.appendChild(itemPriceElement);
  newItem.appendChild(itemDeleteElement);

  shoppingCart.appendChild(newItem);
};

const showNotification = (message) => {
  const notification = document.getElementById('notification');
  notification.textContent = message;

  notification.classList.add('show');
  notification.classList.remove('hidden');

  setTimeout(function () {
    hideNotification();
  }, 2000);
};

const hideNotification = () => {
  const notification = document.getElementById('notification');

  notification.classList.add('hidden');
  notification.classList.remove('show');
};

orderButton.addEventListener('click', async () => {
  const url = '../order/';
  try {
    const orderId = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data);
        return data.order_id;
      });
    for (const id of idsInCart) {
      await fetch(`../cart/${orderId}/${id}`, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
    }
    shoppingCart.innerHTML = '';
    showNotification('Order successful!');
  } catch (e) {
    console.log(e);
    showNotification('Please log in before ordering');
  }
});
