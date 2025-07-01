// Sample products
const products = [
    { id: 1, name: "Sofa", price: 500 },
    { id: 2, name: "Table", price: 150 },
    { id: 3, name: "Chair", price: 75 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || []; // Load cart from localStorage

// Function to display products
function displayProducts() {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = ""; // Clear previous content

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Function to add products to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++; // Increase quantity if item already in cart
    } else {
        cart.push({ ...product, quantity: 1 }); // Add new item
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // Save cart in localStorage
    displayCart(); // Update cart display
}

// Function to display cart
function displayCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="changeQuantity(${item.id}, 1)">+</button>
            <button onclick="changeQuantity(${item.id}, -1)">-</button>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Function to update quantity
function changeQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);

    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId); // Remove if quantity is 0
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Initial calls
displayProducts();
displayCart();
