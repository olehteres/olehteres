const slides = document.querySelectorAll('.banner__content__image');
const infoSlides = document.querySelectorAll('.banner__content__information');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  infoSlides.forEach((infoSlide) => {
    infoSlide.style.display = 'none';
  });
  slides[index].style.display = 'block';
  infoSlides[index].style.display = 'block';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

setInterval(nextSlide, 5000);

const prevBtn = document.querySelector('.banner__slider-btn--prev');
const nextBtn = document.querySelector('.banner__slider-btn--next');

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});