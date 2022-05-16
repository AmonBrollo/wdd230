function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('open');
  document.getElementById('menubutton').classList.toggle('open');
}

const menuButton = decument.getElementById('menuButton');
menuButton.onclick = toggleMenu;