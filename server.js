/**
 * 
 */

const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const puerto = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');






app.get('/', (req, res) => {
    //res.send('Hola Mundo!');

    res.render('home', {
        nombre: 'Alex dominGuez',
        anio: new Date().getFullYear()
    });
});
app.get('/about', (req, res) => {
    //res.send('Hola Mundo!');

    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(puerto, () => {
    console.log(`Escuchando peticiones en el puerto ${puerto}`);
});