// Toggle aktif bar
const navbarNav = document.querySelector(".navbar-u");
// ketika pesan menu diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle aktif keranjang
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-bag').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// klik luar sidebar buar menghilangkan nav
const pesan = document.querySelector("#menu");
const sc = document.querySelector('#shopping-bag');

document.addEventListener("click", function (e) {
  if (!pesan.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});
