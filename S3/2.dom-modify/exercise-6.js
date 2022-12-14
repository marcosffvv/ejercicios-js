//Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const lista = document.createElement('ul');
document.body.appendChild(lista);

for (let i = 0; i < apps.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = apps[i];
    lista.appendChild(li);
}
console.log(lista);