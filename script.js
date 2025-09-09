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

});
