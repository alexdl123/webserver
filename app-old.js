/**
 * 
 */

const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-type': 'application/json' })
        let datos = {
            nombre: 'Alex',
            sexo: 'm',
            url: req.url

        }
        res.write(JSON.stringify(datos));
        res.end();
    })
    .listen(8080);
console.log('Escuchando el puerto 8080');