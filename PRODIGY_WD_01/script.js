// Add background color change on scroll
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  }
});
