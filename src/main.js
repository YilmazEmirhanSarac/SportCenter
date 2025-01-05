const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('bg-main-blue');
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.remove('bg-main-blue');
    navbar.classList.add('bg-transparent');
  }
})