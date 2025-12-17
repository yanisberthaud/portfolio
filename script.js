document.addEventListener('DOMContentLoaded', () => {
    // 1. Animation des boutons CTA sur la page d'accueil
    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach(button => {
        // Stocker le texte original et le texte au survol
        const originalText = button.textContent;
        const hoverText = button.getAttribute('data-hover-text');

        // Événement au survol (Mouse Over)
        button.addEventListener('mouseover', () => {
            // Un petit délai pour l'effet "glitch" ou de transition
            setTimeout(() => {
                button.textContent = hoverText;
            }, 100); 
        });

        // Événement à la sortie du survol (Mouse Out)
        button.addEventListener('mouseout', () => {
             // Un petit délai pour l'effet "glitch" ou de transition
            setTimeout(() => {
                button.textContent = originalText;
            }, 100);
        });
    });


    // 2. Gestion de l'effet de dégradé/apparition au scroll (simple)

    // Simuler une classe pour faire apparaître des éléments
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                // Optionnel: pour refaire l'animation à chaque fois que l'on scroll
                // entry.target.classList.remove('is-visible'); 
            }
        });
    }, {
        // Laisser l'animation se déclencher lorsque l'élément est dans la vue
        threshold: 0.1 
    });

    // Appliquer cet effet sur le titre de la section "Placeholder"
    const sectionTitle = document.querySelector('.placeholder-section h2');
    if (sectionTitle) {
        // Ajouter une classe pour cacher l'élément initialement via CSS
        sectionTitle.classList.add('js-hidden'); 
        observer.observe(sectionTitle);
    }
});