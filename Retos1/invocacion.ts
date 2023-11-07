// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
// par o impar la suma de los caracteres de cada uno de los siguientes arrays:
// Para ello tendrás que exportar dichas funciones en los ficheros correspondientes. ok
// También tendrás que importar dichos ficheros en el fichero actual.

let libIsEven = require ('./condicionales');
let libAdd = require('./buclesFor')

let myArrayC:string[];
let myArrayB:string[];
let myArrayV:string[];

myArrayC = ['Casa', 'Coche', 'Ciudad', 'Cesta']
myArrayB = ['Barco', 'Baca', 'Bicicleta', 'Balón', 'Bisiesto', 'Brasil']
myArrayV = ['Venezuela', 'Veneno', 'Voltaje']

let chatC = new libAdd.myArrayC
let chatB = new libAdd.myArrayB
let chatV = new libAdd.myArrayV

console.log (chatC.isEven());
console.log (chatC.isEven());
console.log (chatC.isEven());
// let sumChatC= new libIsEven.myArrayC
// let sumChatB= new libIsEven.myArrayB
// let sumChatV= new libIsEven.myArrayV



// if ((chatC.libAdd(true)) && (sumChatC.isEven(true))){
//     console.log (true)
// } else if ((chatB.libAdd(true)) && (sumChatB.isEven(true))){
//     console.log (true)
// }else if ((chatV.libAdd(true)) && (sumChatV.isEven(true))){
//     console.log (true)
// } else {
//     console.log (false)
}


