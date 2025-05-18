document.querySelectorAll('.slider').forEach(slider => {
  const slides = slider.querySelectorAll('.slide');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current === 0) ? slides.length - 1 : current - 1;
    showSlide(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current === slides.length - 1) ? 0 : current + 1;
    showSlide(current);
  });

  // Mostra la prima slide all'avvio
  showSlide(current);
});
