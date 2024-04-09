let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-container img');
    const overlay = document.querySelector('.overlay');

    function showImage(index) {
        images.forEach(img => img.classList.add('hidden'));
        images[index].classList.remove('hidden');
    }

    function toggleOverlay() {
        overlay.classList.toggle('opacity-100');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    document.querySelector('.carousel-container').addEventListener('mouseover', toggleOverlay);
    document.querySelector('.carousel-container').addEventListener('mouseout', toggleOverlay);
    document.querySelector('.carousel-container').addEventListener('click', nextImage);
    document.querySelector('.carousel-container').addEventListener('contextmenu', function (event) {
        event.preventDefault();
        prevImage();
    });