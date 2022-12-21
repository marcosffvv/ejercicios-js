//Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.

const imput$$ = document.querySelector('input');

const funcion = () => {
    console.log(imput$$.value);
}

imput$$.addEventListener('focus', funcion);
