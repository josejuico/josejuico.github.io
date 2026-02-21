const carouselStates = {};

function moveSlide(carouselId, direction) {
    const container = document.querySelector(`[data-carousel="${carouselId}"]`);
    if (!container) return; 

    const slides = container.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;

    // Check if the state is undefined
    if (typeof carouselStates[carouselId] === 'undefined') {
        carouselStates[carouselId] = 0;
    }

    const currentIndex = carouselStates[carouselId];

    // Calculate new index
    let newIndex = (currentIndex + direction) % slides.length;
    if (newIndex < 0) {
        newIndex = slides.length - 1;
    }

    // Hide current
    slides[currentIndex].classList.remove('opacity-100', 'z-10');
    slides[currentIndex].classList.add('opacity-0', 'z-0');

    // Show next
    slides[newIndex].classList.remove('opacity-0', 'z-0');
    slides[newIndex].classList.add('opacity-100', 'z-10');

    // Save new state
    carouselStates[carouselId] = newIndex;
}