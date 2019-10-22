var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Los on son para escuhar información
socket.on('disconnect', function() {
    console.log('Perdimos conección con el servidor.');

});

// Son emit para enviar información
// socket.emit('enviarMensaje', '123');
// Para recibir un sms por la misma linea se especifica un callback.
socket.emit('enviarMensaje', {
    // usuario: 'Luis',
    mensaje: 'Hola mundo'
}, function(resp) {
    // console.log('Se dispara el callback');
    console.log('Respuesta server: ', resp);


});

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});