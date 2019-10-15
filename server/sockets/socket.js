const { io } = require('../server')

io.on('connection', (client) => {

    console.log(`Usuario conectado`);
    client.emit(`enviarMensaje`, {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a mi aplicaicón'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchamos al cliente
    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);


        //Enviar un mensaje a todos los usuarios conectados
        client.broadcast.emit('enviarMensaje', mensaje)

        /*  if (mensaje.usuario) {
              callback({
                  resp: `Hola ${mensaje.usuario}, todo salió bien`
              });
          } else {
              callback({
                  resp: 'Me falta el nombre del usuario'
              });
          }       
          */
    });

});