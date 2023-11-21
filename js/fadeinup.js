// Fonction pour détecter quand la section devient visible
function handleIntersection(entries, observer) {
   // console.log('handleIntersection called'); // Ajout de cette ligne
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Ajouter la classe d'animation si la section est visible
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            // Cesser d'observer la section après l'avoir animée
            observer.unobserve(entry.target);
        }
    });
}

// Options pour l'observateur d'intersection
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Le pourcentage de la section visible nécessaire pour déclencher l'animation
};

// Créer un observateur d'intersection
const observer = new IntersectionObserver(handleIntersection, options);

// Sélectionner toutes les sections que vous souhaitez observer
const sectionsToAnimate = document.querySelectorAll('.animate-on-scroll');

// Observer chaque section
sectionsToAnimate.forEach((section) => {
    observer.observe(section);
});
