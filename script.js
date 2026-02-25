const galleryImages = document.querySelectorAll('.gallery img');
const largeImage = document.getElementById('largeImage');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        largeImage.src = img.src;
    });
});
