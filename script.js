let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.carousel-item');
    slides.forEach(slide => (slide.style.display = 'none'));
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    slides[slideIndex].style.display = 'block';
}

document.getElementById('prev').addEventListener('click', () => {
    slideIndex--;
    showSlides(slideIndex);
});

document.getElementById('next').addEventListener('click', () => {
    slideIndex++;
    showSlides(slideIndex);
});

showSlides(slideIndex);
