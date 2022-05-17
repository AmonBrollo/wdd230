function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('open');
  document.getElementById('menuButton').classList.toggle('open');
}

const x = decument.getElementById('menuButton');
x.onclick = toggleMenu;