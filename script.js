document.querySelectorAll('.slider').forEach(slider => {
  const slides = slider.querySelector('.slides');
  const slideItems = slider.querySelectorAll('img');
  let index = 0;

  function showSlide(i) {
    index = (i + slideItems.length) % slideItems.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  slider.querySelector('.next').addEventListener('click', () => showSlide(index + 1));
  slider.querySelector('.prev').addEventListener('click', () => showSlide(index - 1));
});
