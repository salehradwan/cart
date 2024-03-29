/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  // console.log(cartItems[0].product);
}
// console.log(cart.item[0]);
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  // clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

  localStorage.clear();
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
 
  for (let i = 0; i < cart.items.length; i++) {
    let trData = document.createElement('tr');
    table.appendChild(trData);
    let tdE = document.createElement('td')
    trData.appendChild(tdE);
    tdE.textContent = ` x `;

    let data2 = document.createElement('td');
    trData.appendChild(data2);
    data2.textContent = cart.items[i].product;

    let data3 = document.createElement('td');
    trData.appendChild(data3);
    data3.textContent = cart.items[i].quantity;
  }
}
  

// TODO: Find the table body


// TODO: Iterate over the items in the cart
// TODO: Create a TR
// TODO: Create a TD for the delete link, quantity,  and the item
// TODO: Add the TR to the TBODY and each of the TD's to the TR



function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // cart.removeItem(localStorage.removeItem('cart.items.event'));
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}

// This will initialize the page and draw the cart on screen
renderCart();