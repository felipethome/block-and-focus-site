var img = document.getElementById('heroImg');
var inner = document.getElementById('heroInner');

function showHero() {
  inner.classList.add('visible');
}

if (img.complete) {
  showHero();
} else {
  img.addEventListener('load', showHero);
}
