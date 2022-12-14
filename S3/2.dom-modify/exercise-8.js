//Basandote en el siguiente html, inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const sujetaVelas = document.createElement('p')
const cuerpo = document.querySelector('body');

sujetaVelas.innerHTML = 'Voy en medio';

const divs = document.body.querySelectorAll('div');
cuerpo.insertBefore(sujetaVelas, divs[1]);