document.getElementById('reloadLink').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace redireccione a "#" (si se coloca "#").
    location.reload(); // Recarga la página actual.
});