'use strict';

const shoppingCart = document.querySelector('.shopping-cart');
const addButtons = document.querySelectorAll('.add-btn');
const orderButton = document.querySelector('.order-button');
const deleteButtons = document.querySelectorAll('.delete-item');

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

  const itemDeleteElement = document.createElement('li');
  itemDeleteElement.classList.add('delete-item');
  itemDeleteElement.textContent = '-';

  // Delete button
  itemDeleteElement.addEventListener('click', () => {
    newItem.remove();
  });

  newItem.appendChild(itemNameElement);
  newItem.appendChild(itemPriceElement);
  newItem.appendChild(itemDeleteElement);

  shoppingCart.appendChild(newItem);
};

// Notification
const showNotification = () => {
  const notification = document.getElementById('notification');

  notification.classList.add('show');
  notification.classList.remove('hidden');

  setTimeout(function () {
    hideNotification();
  }, 625);
};

const hideNotification = () => {
  const notification = document.getElementById('notification');

  notification.classList.add('hidden');
  notification.classList.remove('show');
};

// Check if addButton is clicked
addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const itemName = button.parentElement.firstChild.textContent
      .trim()
      .replace(/-/g, '');
    // console.log(itemName);
    const itemPrice = parseFloat(
      button.parentElement.querySelector('.price').textContent.replace('$', '')
    );
    // console.log(itemPrice);

    addItem(itemName, itemPrice);
    showNotification();
  });
});
