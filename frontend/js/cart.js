function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.querySelector('.cart-list');
    
    cartList.innerHTML = cart.map(id => `
      <div class="cart-item">
        <p>Produto ID: ${id}</p>
        <button onclick="removeFromCart('${id}')">Remover</button>
      </div>
    `).join('');
  }
  
  function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(id => id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
  }
  
  async function finalizePurchase() {
    const token = localStorage.getItem('token');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const response = await fetch('/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ products: cart })
    });
  
    if (response.ok) {
      alert('Compra realizada com sucesso!');
      localStorage.removeItem('cart');
      loadCart();
    } else {
      alert('Erro ao finalizar compra');
    }
  }
  
  document.addEventListener('DOMContentLoaded', loadCart);
  