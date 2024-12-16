function playMovie(movie) {
    alert("Reproduciendo: " + movie);
    // Aquí podrías agregar la lógica para reproducir el video
    // Por ejemplo, abrir un modal o redirigir a una página de reproducción
}

function playMovie(movie) {
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');

    // Establecer la fuente del video
    videoSource.src = movie;
    videoPlayer.load(); // Cargar el nuevo video
    videoPlayer.play(); // Reproducir el video

    // Mostrar el modal
    videoModal.style.display = 'flex';
}

// Cerrar el video al hacer clic en el modal
function closeVideo() {
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');

    videoPlayer.pause(); // Pausar el video
    videoModal.style.display = 'none'; // Ocultar el modal
}