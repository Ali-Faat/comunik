const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').clientWidth;
let counter = 1;

setInterval(() => {
  slides.style.transition = 'transform 0.5s ease-in-out';
  slides.style.transform = `translateX(${-slideWidth * counter}px)`;
  counter++;

  if (counter === 5) {
    setTimeout(() => {
      slides.style.transition = 'none';
      slides.style.transform = 'translateX(0)';
      counter = 1;
    }, 500);
  }
}, 3000);
