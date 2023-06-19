const uniq = require('lodash/uniq');
var datos = require('./datos');


const autosUnicos = uniq(datos.getAutos());
const animalesSalvajes = datos.getAnimales().find(animal => animal.tipo === 'salvaje');
datos.getAnimales();
datos.getAutos();
console.log(`autosUnicos ${autosUnicos}`);
console.log(`animalesSalvajes ${animalesSalvajes}`);
