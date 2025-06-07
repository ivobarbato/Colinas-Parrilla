const carousel = document.getElementById('carousel');
let index = 0;

const slide = () => {
  const total = carousel.children.length;
  index = (index + 1) % total;
  carousel.style.transform = `translateX(-${index * 600}px)`;
};

setInterval(slide, 3000);