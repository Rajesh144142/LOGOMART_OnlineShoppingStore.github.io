/* ------------------------------- SLIDESHOW ------------------------------ */
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName('mySlides');
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }

  slideIndex += 1;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = 'block';
  }

  setTimeout(showSlides, 3000);
}

/* ---------------------------------- CART --------------------------------- */
const cartIcon = document.querySelector('#cart-icon');
const cart = document.querySelector('.cartp');
const closeCart = document.querySelector('#close-cartp');

if (cartIcon && cart) {
  cartIcon.addEventListener('click', (event) => {
    event.preventDefault();
    cart.classList.add('active');
  });
}

if (closeCart && cart) {
  closeCart.addEventListener('click', () => {
    cart.classList.remove('active');
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  const removeCartButtons = document.getElementsByClassName('cart-remove');
  for (let i = 0; i < removeCartButtons.length; i += 1) {
    const button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
  }

  const quantityInputs = document.getElementsByClassName('cart-quantityp');
  for (let i = 0; i < quantityInputs.length; i += 1) {
    const input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }

  const addCartButtons = document.getElementsByClassName('add-cart');
  for (let i = 0; i < addCartButtons.length; i += 1) {
    const button = addCartButtons[i];
    button.addEventListener('click', addCartClicked);
  }

  const buyButton = document.getElementsByClassName('btn-buyp')[0];
  if (buyButton) {
    buyButton.addEventListener('click', buyButtonClicked);
  }

  const searchInput = document.querySelector('.searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', filterProducts);
  }

  const loginForm = document.querySelector('#id01 form');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Login request submitted.');
      document.getElementById('id01').style.display = 'none';
    });
  }

  const contactForm = document.querySelector('#about-container form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Thanks! We received your message.');
      contactForm.reset();
      document.getElementById('about-container').style.display = 'none';
    });
  }
}

function removeCartItem(event) {
  const buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

function quantityChanged(event) {
  const input = event.target;
  if (Number.isNaN(Number(input.value)) || Number(input.value) <= 0) {
    input.value = 1;
  }
  updateTotal();
}

function updateTotal() {
  const cartContent = document.getElementsByClassName('cart-contentp')[0];
  const cartBoxes = cartContent.getElementsByClassName('cart-boxp');
  let total = 0;

  for (let i = 0; i < cartBoxes.length; i += 1) {
    const cartBox = cartBoxes[i];
    const priceElement = cartBox.getElementsByClassName('cart-pricep')[0];
    const quantityElement = cartBox.getElementsByClassName('cart-quantityp')[0];
    const priceText = priceElement.innerText.replace('₹', '').replace('$', '');
    const price = Number.parseFloat(priceText);
    const quantity = Number(quantityElement.value);
    total += price * quantity;
  }

  total = Math.round(total * 100) / 100;
  document.getElementsByClassName('total-pricep')[0].innerText = `₹${total}`;
}

function buyButtonClicked() {
  const cartContent = document.getElementsByClassName('cart-contentp')[0];

  if (!cartContent.hasChildNodes()) {
    alert('Your cart is empty. Add items before checkout.');
    return;
  }

  alert('Your order is being placed. Please wait...');
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
}

function addCartClicked(event) {
  const button = event.target;
  const shopItem = button.parentElement;
  const title = shopItem.getElementsByClassName('product-title')[0].innerText;
  const price = shopItem.getElementsByClassName('price')[0].innerText;
  const productImg = shopItem.getElementsByClassName('product-img')[0].src;

  const added = addProductToCart(title, price, productImg);
  if (added) {
    alert('Your item has been added to cart.');
  } else {
    alert('This item is already in your cart.');
  }

  updateTotal();
}

function addProductToCart(title, price, productImg) {
  const cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-boxp');

  const cartItems = document.getElementsByClassName('cart-contentp')[0];
  const cartItemsNames = document.getElementsByClassName('cart-product-titlep');

  for (let i = 0; i < cartItemsNames.length; i += 1) {
    if (cartItemsNames[i].innerText === title) {
      return false;
    }
  }

  const cartBoxContent = `
    <img src="${productImg}" alt="${title}" class="cart-imgp">
    <div class="detail-boxp">
      <div class="cart-product-titlep">${title}</div>
      <div class="cart-pricep">${price}</div>
      <input type="number" value="1" class="cart-quantityp">
    </div>
    <i class="bx bxs-trash-alt cart-remove"></i>
  `;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);

  cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
  cartShopBox.getElementsByClassName('cart-quantityp')[0].addEventListener('change', quantityChanged);

  return true;
}

/* ------------------------------ NAV TOGGLE ------------------------------- */
function myFunction() {
  const nav = document.getElementById('myTopnav');
  if (nav.className === 'topnav') {
    nav.className += ' responsive';
  } else {
    nav.className = 'topnav';
  }
}

/* ------------------------------ PRODUCT ROWS ----------------------------- */
const slidername1 = document.getElementById('shop-content1');
const product1 = slidername1 ? slidername1.getElementsByClassName('product-box') : [];
function next1() {
  if (product1.length > 0) slidername1.append(product1[0]);
}
function prev1() {
  if (product1.length > 0) slidername1.prepend(product1[product1.length - 1]);
}

const slidername2 = document.getElementById('shop-content2');
const product2 = slidername2 ? slidername2.getElementsByClassName('product-box') : [];
function next2() {
  if (product2.length > 0) slidername2.append(product2[0]);
}
function prev2() {
  if (product2.length > 0) slidername2.prepend(product2[product2.length - 1]);
}

const slidername3 = document.getElementById('shop-content3');
const product3 = slidername3 ? slidername3.getElementsByClassName('product-box') : [];
function next3() {
  if (product3.length > 0) slidername3.append(product3[0]);
}
function prev3() {
  if (product3.length > 0) slidername3.prepend(product3[product3.length - 1]);
}

const slidername4 = document.getElementById('shop-content4');
const product4 = slidername4 ? slidername4.getElementsByClassName('product-box') : [];
function next4() {
  if (product4.length > 0) slidername4.append(product4[0]);
}
function prev4() {
  if (product4.length > 0) slidername4.prepend(product4[product4.length - 1]);
}

/* ---------------------------- SEARCH FUNCTION ---------------------------- */
function filterProducts(event) {
  const query = event.target.value.trim().toLowerCase();
  const products = document.querySelectorAll('.product-box');

  products.forEach((product) => {
    const title = product.querySelector('.product-title')?.innerText.toLowerCase() || '';
    const shouldShow = title.includes(query);
    product.style.display = shouldShow ? 'inline-block' : 'none';
  });
}

/* -------------------------- OUTSIDE-CLICK HANDLER ------------------------- */
window.addEventListener('click', (event) => {
  const loginModal = document.getElementById('id01');
  const aboutModal = document.getElementById('about-container');

  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }

  if (event.target === aboutModal) {
    aboutModal.style.display = 'none';
  }
});
