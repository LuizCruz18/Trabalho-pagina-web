document.addEventListener("DOMContentLoaded", function () {
 
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav ul");

  toggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

 
  const cases = document.querySelectorAll(".case-card");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  function showSlide(index) {
    cases.forEach((card, i) => {
      card.classList.remove("active");
      dots[i].classList.remove("active");
    });

    cases[index].classList.add("active");
    dots[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cases.length;
    showSlide(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cases.length) % cases.length;
    showSlide(currentIndex);
  });

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.dataset.index);
      showSlide(currentIndex);
    });
  });
});
