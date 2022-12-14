//Basandote en el siguiente html y javascript, inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divsReceptores = document.body.querySelectorAll("div");

for (let i = 0; i < divsReceptores.length; i++) {
    if (divsReceptores[i].className == 'fn-insert-here'){
        const ps = document.createElement('p');
    ps.innerHTML = 'Voy dentro!';
    divsReceptores[i].appendChild(ps);
    }
}
//he creado un p con la clase "fn-insert-here" para que se vea que no solo compara la class sino tambien el hecho de que sea un div.