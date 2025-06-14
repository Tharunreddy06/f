let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
}
audio.play().catch(err => {
  console.log("Autoplay blocked. Click anywhere to start music.");
});
window.addEventListener("click", tryPlay, { once: true });


// Automatic Slide
setInterval(nextSlide, 4000);

// Buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);