document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");

  function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(${-index * slideWidth}px)`;
  }

  document.querySelector(".next").addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  });

  document.querySelector(".prev").addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  });

  // Optional auto-slide
  setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }, 5000);
});
