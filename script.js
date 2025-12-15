document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slides img').length;
  let currentIndex = 0;

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = -currentIndex * (100 / totalSlides);
    slides.style.transform = `translateX(${offset}%)`;
  }

  setInterval(showNextSlide, 3000);
});
