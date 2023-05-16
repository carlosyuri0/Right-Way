const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
let intervalId;

function goToIndex(index) {
  currentIndex = index;
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function goToNext() {
  currentIndex = currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
  goToIndex(currentIndex);
}

prevButton.addEventListener('click', () => {
  currentIndex = currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
  goToIndex(currentIndex);
});

nextButton.addEventListener('click', () => {
  goToNext();
});

function startCarousel() {
  intervalId = setInterval(goToNext, 3000); // Avança para o próximo slide a cada 3 segundos
}

function stopCarousel() {
  clearInterval(intervalId);
}

startCarousel();