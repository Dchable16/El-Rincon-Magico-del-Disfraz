// Espera a que todo el contenido de la página se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {

    // --- CÓDIGO DEL CARRUSEL DE HÉROE ---

    // 1. Seleccionamos el elemento del carrusel en el HTML
    const heroSection = document.getElementById('hero-section');

    // 2. Creamos una lista (array) con las imágenes que queremos mostrar
    //    ¡IMPORTANTE! Reemplaza estas URLs con tus propias imágenes.
    const images = [
        'url("https://images.unsplash.com/photo-1541187714594-73d7516db213?q=80&w=2070")',
        'url("https://images.unsplash.com/photo-1508224522488-8557a35436e2?q=80&w=2070")',
        'url("https://images.unsplash.com/photo-1571204052389-9a79a896d182?q=80&w=2070")'
    ];

    // 3. Empezamos en la primera imagen
    let currentImageIndex = 0;

    // 4. Creamos una función que cambia la imagen de fondo
    function changeBackgroundImage() {
        // Cambiamos el índice a la siguiente imagen de la lista
        // El '%' asegura que volvamos al principio (0) cuando lleguemos al final de la lista
        currentImageIndex = (currentImageIndex + 1) % images.length;
        
        // Aplicamos la nueva imagen al estilo de la sección de héroe
        heroSection.style.backgroundImage = images[currentImageIndex];
    }

    // 5. Hacemos que la función 'changeBackgroundImage' se ejecute cada 5 segundos
    setInterval(changeBackgroundImage, 5000); // 5000 milisegundos = 5 segundos

    const thumbnailsContainer = document.getElementById('product-thumbnails');

if (thumbnailsContainer) {
    // 1. Seleccionamos la imagen principal
    const mainImage = document.getElementById('main-product-image');
    
    // 2. Seleccionamos TODAS las imágenes miniatura
    const thumbnails = thumbnailsContainer.querySelectorAll('img');

    // 3. Creamos una función que se activa al hacer clic en una miniatura
    function handleThumbnailClick(event) {
        // 'event.target' es la miniatura específica en la que se hizo clic
        const clickedThumbnail = event.target;

        // Cambiamos el 'src' (la fuente de la imagen) de la imagen principal
        // para que sea igual al 'src' de la miniatura en la que hicimos clic
        mainImage.src = clickedThumbnail.src;

        // Actualizamos la clase activa
        // Primero, quitamos la clase 'thumbnail--active' de todas las miniaturas
        thumbnails.forEach(thumb => {
            thumb.classList.remove('thumbnail--active');
        });

        // Luego, añadimos la clase 'thumbnail--active' solo a la miniatura clickeada
        clickedThumbnail.classList.add('thumbnail--active');
    }

    // 4. Añadimos un "detector de clics" (event listener) a cada miniatura
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', handleThumbnailClick);
    });
}

    // Verificamos si estamos en la página de categoría buscando el botón de filtros
const filterButton = document.querySelector('.filters-sidebar__button');

if (filterButton) {
    // 1. Seleccionamos los elementos que necesitamos
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const allProducts = document.querySelectorAll('.product-card');

    // 2. Creamos la función que se ejecutará al hacer clic en el botón
    function applyFilters() {
        // Obtenemos los filtros seleccionados
        const selectedFilters = {
            talla: [],
            ocasion: []
        };

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                // 'checkbox.name' es 'talla' u 'ocasion'
                // 'checkbox.value' es 's', 'm', 'halloween', etc.
                selectedFilters[checkbox.name].push(checkbox.value);
            }
        });

        // 3. Recorremos cada producto para decidir si lo mostramos o lo ocultamos
        allProducts.forEach(product => {
            let shouldShow = true; // Por defecto, mostramos el producto
            
            const productTalla = product.dataset.talla;
            const productOcasion = product.dataset.ocasion;

            // Comprobamos el filtro de talla
            if (selectedFilters.talla.length > 0 && !selectedFilters.talla.includes(productTalla)) {
                shouldShow = false; // El producto no coincide, no lo mostramos
            }

            // Comprobamos el filtro de ocasión
            if (selectedFilters.ocasion.length > 0 && !selectedFilters.ocasion.includes(productOcasion)) {
                shouldShow = false; // El producto no coincide, no lo mostramos
            }

            // 4. Mostramos u ocultamos el producto
            if (shouldShow) {
                product.style.display = 'block'; // Mostrar
            } else {
                product.style.display = 'none';  // Ocultar
            }
        });
    }

    // 5. Añadimos el "detector de clics" al botón
    filterButton.addEventListener('click', applyFilters);
}

});
