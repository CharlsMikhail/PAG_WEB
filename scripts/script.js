const comprarBtn = document.getElementById('comprarBtn');
const mensajeGracias = document.getElementById('mensajeGracias');

comprarBtn.addEventListener('click', function() {
    mensajeGracias.textContent = '¡Gracias por comprar en la Tiendita de Don Pepe!';
});