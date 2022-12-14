//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div1 = document.createElement("div");
document.body.appendChild(div1);

for (let i = 0; i < 6; i++) {
    const p = document.createElement("p");
    div1.appendChild(p);
}
console.log(div1);