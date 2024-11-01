async function loadProducts() {
    const response = await fetch('/products');
    const products = await response.json();
    
    const productList = document.querySelector('.product-list');
    productList.innerHTML = products.map(product => `
      <div class="product-item">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Preço: R$${product.price.toFixed(2)}</p>
        <button onclick="addToCart('${product._id}')">Adicionar ao Carrinho</button>
      </div>
    `).join('');
  }
  
  function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produto adicionado ao carrinho');
  }
  
  document.addEventListener('DOMContentLoaded', loadProducts);
  