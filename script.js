// Swiper init
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: "fade",
    speed: 1000,
  });
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');

  // Fonction pour appliquer la couleur
  function updateNavbar() {
    if (window.scrollY > 50 || navbar.matches(':hover')) {
      navbar.classList.add('bg-black', 'shadow-md');
    } else {
      navbar.classList.remove('bg-black', 'shadow-md');
    }
  }
  
  // Scroll
  window.addEventListener('scroll', updateNavbar);
  
  // Hover
  navbar.addEventListener('mouseenter', updateNavbar);
  navbar.addEventListener('mouseleave', updateNavbar);
  
  // Initial check au chargement
  updateNavbar();
  