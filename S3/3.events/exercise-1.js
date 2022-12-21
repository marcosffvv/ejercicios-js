//Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const boton$$ = document.querySelector('#btnToClick');

const imprime = (event) => {
    console.log(event);
}

boton$$.addEventListener('click', imprime);

