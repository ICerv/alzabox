document.addEventListener('DOMContentLoaded', function () {
  /* SCROLL BUTTON FUNCTIONALITY */
  const scrollButton = document.querySelector('.scroll__top');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });

  scrollButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  /* ANIMATE IMAGES @ BANNER */

  const animateImages = () => {
    const sr = ScrollReveal();

    const imagesToAnimate = document.querySelectorAll(
      '.section__alzabox--phone-img',
    );
    const bannerImage = document.querySelector(
      '.section__alzabox--phone-intro',
    );

    imagesToAnimate.forEach((image, index) => {
      const delay = 200 * index;
      sr.reveal(image, {
        scale: 0.85,
        duration: 800,
        easing: 'ease-in-out',
        delay: delay,
      });
    });

    sr.reveal(bannerImage, {
      scale: 0.85,
      duration: 800,
      easing: 'ease-in-out',
      origin: 'right',
      delay: 200,
    });
  };

  animateImages();
});

/* ACCORDION FUNCTIONALITY */
const accordionItems = document.querySelectorAll(
  '.section__alzabox--item-more',
);

accordionItems.forEach((item) => {
  const content = item.querySelector('.section__alzabox--text-more');

  item.addEventListener('click', () => {
    item.classList.toggle('active');

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
