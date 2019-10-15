//Para aumentar la compativilidad con los navegadores
var socket = io();

//Comprobamos la conexión con el servidor
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
//Escuchamos al server
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});
//Enviamos información. Nombre de la variable y el valor
socket.emit('enviarMensaje', {
    usuario: 'Ángel',
    mensaje: 'Hola server'
}, function(mensaje) {
    console.log('Servidor: ', mensaje);
});
//Escuchamos información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});