document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
  
    if (data.token) {
      localStorage.setItem('token', data.token);
      alert('Login realizado com sucesso!');
      window.location.href = 'index.html';
    } else {
      alert('Erro no login');
    }
  });
  
  document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    const data = await response.json();
  
    if (data.token) {
      localStorage.setItem('token', data.token);
      alert('Cadastro realizado com sucesso!');
      window.location.href = 'index.html';
    } else {
      alert('Erro no cadastro');
    }
  });
  