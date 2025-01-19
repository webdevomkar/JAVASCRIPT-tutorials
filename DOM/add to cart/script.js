// Initial list of products
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
  { id: 4, name: 'Product 4', price: 40 },
  { id: 5, name: 'Product 5', price: 50 }
];

// Cart array to store items added to the cart
let cart = [];

// Function to display products
function displayProducts() {
  const productContainer = document.getElementById('products');
  productContainer.innerHTML = '';
  products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
          <span>${product.name} - $${product.price}</span>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productContainer.appendChild(productDiv);
  });
}

// Function to display cart items
function displayCart() {
  const cartContainer = document.getElementById('cart');
  cartContainer.innerHTML = '';
  cart.forEach(item => {
      const cartDiv = document.createElement('div');
      cartDiv.className = 'cart-item';
      cartDiv.innerHTML = `
          <span>${item.name} - $${item.price}</span>
          <button class="remove" onclick="removeFromCart(${item.id})">Remove</button>
      `;
      cartContainer.appendChild(cartDiv);
  });
  updateTotal();
}

// Function to add product to the cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  displayCart();
}

// Function to remove product from the cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  displayCart();
}

// Function to update the total price
function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('total').textContent = total;
}

// Initial display
displayProducts();
displayCart();

