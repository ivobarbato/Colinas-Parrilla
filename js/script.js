const carousel = document.getElementById('carousel');
let index = 0;

const slide = () => {
  const total = carousel.children.length;
  index = (index + 1) % total;
  carousel.style.transform = `translateX(-${index * 600}px)`;
};

setInterval(slide, 3000);

const quotes = document.querySelectorAll('#quote-carousel .quote');
let currentQuote = 0;

setInterval(() => {
  quotes[currentQuote].classList.remove('active');
  currentQuote = (currentQuote + 1) % quotes.length;
  quotes[currentQuote].classList.add('active');
}, 5000);
