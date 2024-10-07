function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
}

// Button arrow-down scroll
document.getElementById('scrollButton').addEventListener('click', function() {
  window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
  });
});
