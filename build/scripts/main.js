var img = document.getElementById('heroImg');

function showHero() {
  img.classList.add('visible');
}

if (img.complete) {
  showHero();
} else {
  img.addEventListener('load', showHero);
}
