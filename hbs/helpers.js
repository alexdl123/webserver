/**
 * 
 */

const hbs = require('hbs');

//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((pal, i) => {
        palabras[i] = pal.charAt(0).toUpperCase() + pal.slice(1).toLowerCase();
    })

    return palabras.join(' ');
});