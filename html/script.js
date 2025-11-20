// Swiper init (Code inchangé)
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
  
// Définition des éléments
const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

// --- Gestion du Menu Mobile (par le clic - fonctionnel) ---

// Ouvre/ferme quand on clique sur le bouton
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden'); 
    
    // Pour le menu mobile, nous allons FORCER la navbar à devenir noire (pour la lisibilité)
    if (!mobileMenu.classList.contains('hidden')) {
        navbar.classList.add('bg-black', 'shadow-md');
    } else {
        // Retirer le fond noir quand le menu se ferme
        navbar.classList.remove('bg-black', 'shadow-md');
    }
});

// Ferme le menu quand on clique sur un lien 
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    // Retirer le fond noir quand le menu se ferme
    navbar.classList.remove('bg-black', 'shadow-md');
  });
});


// ... (Code Swiper, Navbar et Mobile Menu précédent) ...


// ----------------------------------------------------------------
// --- EFFET PARALLAX (LOGIQUE MISE À JOUR POUR DEUX IMAGES) ---
// ----------------------------------------------------------------

const parallaxImageLeft = document.getElementById('parallax-image-left');
const parallaxImageRight = document.getElementById('parallax-image-right');
const parallaxSection = document.getElementById('parallax-image-section');

// Facteurs de vitesse du parallax (peuvent être différents)
const parallaxSpeedLeft = 0.45; // Mouvement plus rapide pour la gauche
const parallaxSpeedRight = 0.15; // Mouvement plus lent pour la droite

function updateParallaxImage() {
    if (!parallaxImageLeft || !parallaxImageRight || !parallaxSection) return; 

    const sectionRect = parallaxSection.getBoundingClientRect();
    const sectionTop = sectionRect.top; 
    const sectionHeight = sectionRect.height; 

    // Si la section est visible dans la fenêtre
    if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
        
        // Calcul du décalage basé sur la position de la section (distance parcourue par le scroll)
        const scrollDistance = window.scrollY;
        
        // Logique Image Gauche (Mouvement vers le BAS, plus rapide)
        const offsetLeft = scrollDistance * parallaxSpeedLeft;
        parallaxImageLeft.style.transform = `translateY(${offsetLeft}px)`;

        // Logique Image Droite (Mouvement vers le HAUT, plus lent et inversé)
        // L'effet négatif fait remonter l'image légèrement quand on scroll vers le bas
        const offsetRight = scrollDistance * -parallaxSpeedRight; 
        parallaxImageRight.style.transform = `translateY(${offsetRight}px)`;
    }
}

// Ajouter l'écouteur d'événement au scroll
window.addEventListener('scroll', updateParallaxImage);

// Appeler une première fois au chargement 
updateParallaxImage();

