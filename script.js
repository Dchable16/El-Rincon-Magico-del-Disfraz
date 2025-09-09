// Espera a que todo el contenido de la página se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {

    // --- CÓDIGO DEL CARRUSEL DE HÉROE ---
    const heroSection = document.getElementById('hero-section');
    // Solo ejecuta el código del carrusel si el elemento 'heroSection' existe
    if (heroSection) {
        const images = [
            'url("https://images.unsplash.com/photo-1541187714594-73d7516db213?q=80&w=2070")',
            'url("https://images.unsplash.com/photo-1508224522488-8557a35436e2?q=80&w=2070")',
            'url("https://images.unsplash.com/photo-1571204052389-9a79a896d182?q=80&w=2070")'
        ];
        let currentImageIndex = 0;

        function changeBackgroundImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            heroSection.style.backgroundImage = images[currentImageIndex];
        }
        setInterval(changeBackgroundImage, 5000);
    }

    // --- CÓDIGO DE LA GALERÍA DE PRODUCTO ---
    const thumbnailsContainer = document.getElementById('product-thumbnails');
    if (thumbnailsContainer) {
        const mainImage = document.getElementById('main-product-image');
        const thumbnails = thumbnailsContainer.querySelectorAll('img');

        function handleThumbnailClick(event) {
            const clickedThumbnail = event.target;
            mainImage.src = clickedThumbnail.src;
            thumbnails.forEach(thumb => {
                thumb.classList.remove('thumbnail--active');
            });
            clickedThumbnail.classList.add('thumbnail--active');
        }

        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', handleThumbnailClick);
        });
    }

    // --- CÓDIGO DE FILTROS DE LA PÁGINA DE CATEGORÍA ---
    const filterButton = document.querySelector('.filters-sidebar__button');
    if (filterButton) {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const allProducts = document.querySelectorAll('.product-card');

        function applyFilters() {
            const selectedFilters = { talla: [], ocasion: [] };
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    selectedFilters[checkbox.name].push(checkbox.value);
                }
            });

            allProducts.forEach(product => {
                let shouldShow = true;
                const productTalla = product.dataset.talla;
                const productOcasion = product.dataset.ocasion;

                if (selectedFilters.talla.length > 0 && !selectedFilters.talla.includes(productTalla)) {
                    shouldShow = false;
                }
                if (selectedFilters.ocasion.length > 0 && !selectedFilters.ocasion.includes(productOcasion)) {
                    shouldShow = false;
                }
                product.style.display = shouldShow ? 'block' : 'none';
            });
        }
        filterButton.addEventListener('click', applyFilters);
    }

}); 
