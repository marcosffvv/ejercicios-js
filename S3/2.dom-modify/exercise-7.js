//Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

const eliminar = document.querySelectorAll(".fn-remove-me");

for (const p$$ of eliminar) {
    p$$.remove();
}