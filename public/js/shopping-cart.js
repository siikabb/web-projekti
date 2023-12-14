'use strict';

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

// Check if addButton is clicked
addButtons.forEach((button) => {
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
  });
});
