//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const pp = document.createElement('p');
pp.innerHTML = 'soy dinamico!'

document.body.appendChild(pp);