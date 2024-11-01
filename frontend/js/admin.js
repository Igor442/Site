async function loadAdminProducts() {
    const response = await fetch('/products');
    const products = await response.json();
    
    const productList = document.getElementById('product-list');
    productList.innerHTML = products.map(product => `
      <li>
        <p>Nome: ${product.name}</p>
        <p>Preço: R$${product.price.toFixed(2)}</p>
        <p>Estoque: ${product.stock}</p>
      </li>
    `).join('');
  }
  
  document.addEventListener('DOMContentLoaded', loadAdminProducts);
  