// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
// par o impar la suma de los caracteres de cada uno de los siguientes arrays:
// Para ello tendrás que exportar dichas funciones en los ficheros correspondientes. ok
// También tendrás que importar dichos ficheros en el fichero actual.
// // const myAdd = require("./buclesFor");
// const myIsEven = require("./condicionales");
import { add } from "./buclesFor";

import { isEven } from "./condicionales";

let myArrayC = ['Casa', 'Coche', 'Ciudad', 'Cesta']
let myArrayB = ['Barco', 'Baca', 'Bicicleta', 'Balón', 'Bisiesto', 'Brasil']
let myArrayV = ['Venezuela', 'Veneno', 'Voltaje']


let nChatC = add(myArrayC);
let nChatB = add(myArrayB);
let nChatV = add(myArrayV);

isEven(nChatC);
isEven(nChatB);
isEven(nChatV);


