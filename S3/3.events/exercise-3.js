//Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

const imput$$ = document.querySelector('input');

const myfuncion = () => {
    console.log(imput$$.value);
}

imput$$.addEventListener('input', myfuncion);