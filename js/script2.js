
const swiperWrapper = document.getElementById('swiper-wrapper');
const slides = document.querySelectorAll('.slide-content');

const btnPrev = document.getElementById("button-prev");
const btnNext = document.getElementById("button-next");

function showSlide(index) {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
    if (idx == index) slide.classList.add("active");
  })
}

btnPrev.addEventListener("click", () => {
  let index = [...slides].findIndex((slide) => {
    return slide.classList.contains("active");
  });
  showSlide((index - 1 + slides.length) % slides.length);
});

btnNext.addEventListener("click", () => {
  let index = [...slides].findIndex((slide) => {
    return slide.classList.contains("active");
  });
  showSlide((index + 1) % slides.length);
})