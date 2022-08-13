'use script';

const body = document.querySelector('body');
const cartBtn = document.querySelector('.cart');
const loginBtn = document.querySelector('.user');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');
const searchBtn = document.querySelector('.search');
const scrollTop = document.querySelector('.scrollTop');
const sidebarCart = document.querySelector('.sidebar-cart');
const sidebarLogin = document.querySelector('.sidebar-login');
const sidebarSearch = document.querySelector('.sidebar-search');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebarNav = document.querySelector('.sidebar-navigation');

const fadeIns = document.querySelectorAll('.fade-in');

const bannerSection = document.getElementById('banner');
const closeSideCart = document.getElementById('close-sideCart');
const closeSideLogin = document.getElementById('close-sideLogin');
const closeSideNavbar = document.getElementById('close-sideNavbar');
const closeSideSearch = document.getElementById('close-sideSearch');

// ----------------------------------- Intersection Observer --------------------------------------

const options = {
   threshold: 1
};

const appearOptions = {
   threshold: 0.7,
   rootMargin: '-100px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      entry.isIntersecting ? scrollTop.classList.add('shrink') : scrollTop.classList.remove('shrink');
   });
}, options);

const headerObserver = new IntersectionObserver(entries => {
   entries.forEach(entry =>
      !entry.isIntersecting ? navbar.classList.add('sticky') : navbar.classList.remove('sticky'));
}, options);

const appearObserver = new IntersectionObserver(entries => {
   entries.forEach(entry => {

      if (!entry.isIntersecting) {
         return;
      } else {
         entry.target.classList.add('appear');
         appearObserver.unobserve(entry.target);
      };
   });
}, appearOptions);

scrollObserver.observe(bannerSection);
headerObserver.observe(bannerSection);

fadeIns.forEach(fadeIn => {
   appearObserver.observe(fadeIn);
});


// ----------------------------------- Event Listeners --------------------------------------------

const openSidebarNav = () => {
   sidebarNav.classList.add('open');
   overlay.classList.add('show');
   // body.style.overflow = 'hidden';
};

const closeSidebarNav = () => {
   sidebarNav.classList.remove('open');
   overlay.classList.remove('show');
   // body.style.overflow = 'visible';
};

const openSidebarSearch = () => {
   sidebarSearch.classList.add('open');
   overlay.classList.add('show');
};

const closeSidebarSearch = () => {
   sidebarSearch.classList.remove('open');
   overlay.classList.remove('show');
   // body.style.overflow = 'visible';
};

const openSidebarLogin = () => {
   sidebarLogin.classList.add('open');
   overlay.classList.add('show');
   // body.style.overflow = 'hidden';
};

const closeSidebarLogin = () => {
   sidebarLogin.classList.remove('open');
   overlay.classList.remove('show');
   // body.style.overflow = 'visible';
};

const openSidebarCart = () => {
   sidebarCart.classList.add('open');
   overlay.classList.add('show');
   // body.style.overflow = 'hidden';
};

const closeSidebarCart = () => {
   sidebarCart.classList.remove('open');
   overlay.classList.remove('show');
   // body.style.overflow = 'visible';
};

scrollTop.addEventListener('click', function () {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   });
});

overlay.addEventListener('click', function () {

   closeSidebarNav();
   closeSidebarCart();
   closeSidebarLogin();
   closeSidebarSearch();
});

hamburgerMenu.addEventListener('click', openSidebarNav);
closeSideNavbar.addEventListener('click', closeSidebarNav);

searchBtn.addEventListener('click', openSidebarSearch);
closeSideSearch.addEventListener('click', closeSidebarSearch);

loginBtn.addEventListener('click', openSidebarLogin);
closeSideLogin.addEventListener('click', closeSidebarLogin);

cartBtn.addEventListener('click', openSidebarCart);
closeSideCart.addEventListener('click', closeSidebarCart);


// ----------------------------------- Swiper -----------------------------------------------------


const swiperBanner = new Swiper('#swiper-banner ', {

   init: true,
   loop: true,
   speed: 2000,
   spaceBetween: 10,
   centeredSlides: true,
   slidesPerView: "auto",

   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: 'true'
   },

   autoplay: {
      delay: 2500,
      disableOnInteraction: true,
   }
});

const swiperArrival = new Swiper('#swiper-arrival ', {

   init: true,
   loop: true,
   speed: 2000,
   slidesPerView: 4,
   spaceBetween: 20,
   loopedSlides: 50,
   grabCursor: true,
   centeredSlides: false,
   breakpointsInverse: true,
   loopFillGroupWithBlank: false,

   breakpoints: {
      300: {
         slidesPerView: 1,
         spaceBetween: 40,
      },
      420: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
      800: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
      1280: {
         slidesPerView: 4,
         spaceBetween: 20,
      }
   },

   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: 'true'
   }
});

const swiperSellers = new Swiper('#swiper-seller ', {

   init: true,
   loop: true,
   speed: 2000,
   slidesPerView: 4,
   spaceBetween: 20,
   loopedSlides: 50,
   grabCursor: true,
   centeredSlides: false,
   breakpointsInverse: true,
   loopFillGroupWithBlank: false,

   breakpoints: {
      300: {
         slidesPerView: 1,
         spaceBetween: 40,
      },
      420: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
      800: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
      1280: {
         slidesPerView: 4,
         spaceBetween: 20,
      }
   },

   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: 'true'
   }
});

const swiperBlog = new Swiper('#swiper-blog ', {

   init: true,
   loop: true,
   speed: 2000,
   loopedSlides: 50,
   grabCursor: true,
   centeredSlides: false,
   breakpointsInverse: true,
   loopFillGroupWithBlank: false,

   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 40,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
      991: {
         slidesPerView: 3,
         spaceBetween: 20,
      }
   },

   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: 'true'
   }
});