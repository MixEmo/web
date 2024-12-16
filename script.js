const videoPlayer = document.getElementById('videoPlayer');

videoPlayer.addEventListener('play', () => {
    console.log('El video está reproduciendo');
});

videoPlayer.addEventListener('pause', () => {
    console.log('El video está en pausa');
});

// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');
    // Manejar el streaming aquí
});

server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});

// script.js
const socket = io.connect('URL_DEL_SERVIDOR');

// Código para manejar la conexión y el streaming
socket.on('stream', (stream) => {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.srcObject = stream;
});

```javascript
// Ejemplo de carga de archivos a AWS S3
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const uploadFile = (file) => {
    const params = {
        Bucket: 'nombre-del-bucket',
        Key: file.name,
        Body: file.data,
    };
    return s3.upload(params).promise();
};
```

