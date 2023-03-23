const slider = document.querySelector('.swiper');
let mySwiper;

function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile === 'false') {
    mySwiper = new Swiper(slider, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      grabCursor: true,
      spaceBetween: 16,
      loop: true,
      slidesPerView: 1.25,
      speed: 1000,
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 768) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-initialized')) {
      mySwiper.destroy();
    }
  }
}
mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});


let btn = document.querySelector('.brands__button')
let brands = document.querySelectorAll('.brands__slide_hidden');

if (window.innerWidth >= 768 && window.innerWidth < 1120) {
btn.addEventListener('click', function () {
for (let brand of brands) {
  
  if (brand.classList.contains('brands__slide_hidden')) {
    brand.classList.toggle('brands__slide_hidden');
    btn.textContent = 'Скрыть';
  } else {
    brand.classList.add('brands__slide_hidden');
    btn.textContent = 'Показать все';
  }
}
})
}
let brandsDesktop = document.querySelectorAll('.brands__slide_hidden_desktop');

if (window.innerWidth >= 1120) {
  btn.addEventListener('click', function () {
    for (let brandDesktop of brandsDesktop) {
      
      if (brandDesktop.classList.contains('brands__slide_hidden_desktop')) {
        brandDesktop.classList.toggle('brands__slide_hidden_desktop');
        btn.textContent = 'Скрыть';
      } else {
        brandDesktop.classList.add('brands__slide_hidden_desktop');
        btn.textContent = 'Показать все';
      }
    }
    })
    }

