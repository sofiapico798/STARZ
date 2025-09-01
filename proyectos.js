document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    const header = section.querySelector('.section-titulo');
    const content = section.querySelector('.section-content');
    const arrow = section.querySelector('.arrow');

    header.addEventListener('click', () => {
      content.classList.toggle('active');
      arrow.classList.toggle('rotate');
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    let index = 0;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    const slideWidth = () => carousel.getBoundingClientRect().width;

    const updatePosition = () => {
      track.style.transform = `translateX(-${index * slideWidth()}px)`;
    };

    const setSlideSizes = () => {
      slides.forEach(slide => {
        slide.style.width = `${slideWidth()}px`;
      });
      updatePosition();
    };

   
    track.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
    });

  
    track.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
      const deltaX = currentX - startX;
      track.style.transition = "none"; 
      track.style.transform = `translateX(${-index * slideWidth() + deltaX}px)`;
    });

  
    track.addEventListener('touchend', (e) => {
      isDragging = false;
      track.style.transition = "transform 0.3s ease"; 
      const deltaX = e.changedTouches[0].clientX - startX;

      if (deltaX < -50 && index < slides.length - 1) {
        index++; 
      } else if (deltaX > 50 && index > 0) {
        index--; 
      }

      updatePosition();
    });

    
    window.addEventListener('resize', setSlideSizes);

    setSlideSizes();
  });
});
