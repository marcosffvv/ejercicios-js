//Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.

let idkw = [];

fetch('https://api.agify.io?name=michael')
    .then((response) => response.json())
    .then((responseJson) => {
        idkw = [...idkw, responseJson]
        console.log(idkw);
    })