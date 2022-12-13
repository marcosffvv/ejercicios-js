//Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros. 

// - Ejecuta esta función sin pasar ningún parametro
// - Ejecuta esta función pasando un solo parametro
// - Ejecuta esta función pasando dos parametros

// EJERCICIO CON FUNCIONES NORMALES

// function primeraFuncion(a = 10, b = 5) {
//     console.log(a*b);
// }
// primeraFuncion();
// primeraFuncion(30);
// primeraFuncion(2, 3);

// EJERCICIO CON ARROW FUNCTIONS

let primeraFuncion = (a = 10, b = 5) => {
    console.log(a*b);
}
primeraFuncion();
primeraFuncion(20);
primeraFuncion(50, 10);