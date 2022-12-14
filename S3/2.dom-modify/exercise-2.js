//Inserta dinamicamente en un html un div que contenga una p con javascript.

const div1 = document.createElement("div");
const pEnDiv = document.createElement("p");

document.body.appendChild(div1);
div1.appendChild(pEnDiv);
