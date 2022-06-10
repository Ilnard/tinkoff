const body = document.querySelector('body')

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1.5,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    breakpoints: {
      760: {
        slidesPerView: 2.5,
      },
      1240: {
        slidesPerView: 3.5,
      },
      1560: {
        slidesPerView: 4.5,
      }
    }
  });
function burgerMenuFunc() {
  const burgerIcon = document.querySelector('.burger-menu-icon')
  const burgerMenu = document.querySelector('.burger-content')
  const burgerStick = document.querySelector('.burger-menu-icon')
  const header = document.querySelector('.sign-header')

  burgerIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu-content_active')
    burgerStick.classList.toggle('burger-menu-icon_active')
    body.classList.toggle('overflow-hidden')
    header.classList.toggle('sign-header')
  })
}
burgerMenuFunc()