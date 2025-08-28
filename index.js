document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.corebusiness-card');
  
    const reveal = () => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', reveal);
    reveal();
  });

  var swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    speed: 6500,
    loop: true,
    slidesPerView: "auto",
    freeMode: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 4,
      },
      480: {
        slidesPerView: 2,
      }
    }
  });