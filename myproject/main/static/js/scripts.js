const slideIndex = [1, 1, 1, 1];
const slideId = ["slides0", "slides1", "slides2", "slides3"];
let currentModalIndex = 0;
let currentModalSlideIndex = 0;

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    const slides = document.querySelectorAll(`.portfolio-item:nth-child(${no + 1}) .slide`);
    if (n > slides.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = slides.length }
    slides.forEach((slide, i) => {
        slide.style.display = i === (slideIndex[no] - 1) ? "block" : "none";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    slideIndex.forEach((_, i) => showSlides(1, i));
});

function openModal(img) {
    const slides = img.closest('.slides').querySelectorAll('img');
    currentModalIndex = Array.from(document.querySelectorAll('.portfolio-item')).indexOf(img.closest('.portfolio-item'));
    currentModalSlideIndex = Array.from(slides).indexOf(img);
    showModalSlide(currentModalSlideIndex);
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function plusModalSlides(n) {
    const slides = document.querySelectorAll(`.portfolio-item:nth-child(${currentModalIndex + 1}) .slide img`);
    currentModalSlideIndex += n;
    if (currentModalSlideIndex >= slides.length) { currentModalSlideIndex = 0 }
    if (currentModalSlideIndex < 0) { currentModalSlideIndex = slides.length - 1 }
    showModalSlide(currentModalSlideIndex);
}

function showModalSlide(n) {
    const slides = document.querySelectorAll(`.portfolio-item:nth-child(${currentModalIndex + 1}) .slide img`);
    const modalImg = document.getElementById("modalImg");
    modalImg.src = slides[n].src;
}
