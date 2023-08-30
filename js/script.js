const pinkBox = document.querySelector('.pink-box');
let scrolled = false;

window.addEventListener('scroll', () => {
  if (!scrolled && isScrolledIntoView(pinkBox)) {
    pinkBox.classList.add('active');
    scrolled = true;
  }
});

function isScrolledIntoView(element) {
  const rect = element.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  // Solo los elementos completamente visibles retornarán verdadero
  return elemTop >= 0 && elemBottom <= window.innerHeight;
}
