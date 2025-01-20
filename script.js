// Simulasi login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai dari input
    const username = event.target[0].value; // Username
    const password = event.target[1].value; // Password

    // Cek username dan password
    if (username === 'user' && password === 'user') {
        window.location.href = 'menu.html'; // Arahkan ke halaman menu setelah login
    } else {
        alert('Username atau Password salah!'); // Tampilkan pesan kesalahan
    }
});

// Keranjang
let cart = [];

// Fungsi untuk menambahkan item ke keranjang
function addToCart(item) {
    cart.push(item);
    displayCart();
    updateCartCount();
}

// Fungsi untuk menampilkan daftar item di keranjang
function displayCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = ''; // Kosongkan daftar keranjang
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartList.appendChild(li);
    });
}

// Fungsi untuk memperbarui jumlah item di keranjang
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.length; // Update jumlah item di keranjang
}

// Fungsi untuk menampilkan atau menyembunyikan keranjang saat ikon diklik
function toggleCart() {
    const cartList = document.getElementById('cart');
    if (cartList.style.display === 'none' || cartList.style.display === '') {
        cartList.style.display = 'block'; // Tampilkan keranjang
    } else {
        cartList.style.display = 'none'; // Sembunyikan keranjang
    }
}