// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
// par o impar la suma de los caracteres de cada uno de los siguientes arrays:
// Para ello tendrás que exportar dichas funciones en los ficheros correspondientes. ok
// También tendrás que importar dichos ficheros en el fichero actual.
var libIsEven = require('./condicionales');
var libAdd = require('./buclesFor');
var myArrayC;
var myArrayB;
var myArrayV;
myArrayC = ['Casa', 'Coche', 'Ciudad', 'Cesta'];
myArrayB = ['Barco', 'Baca', 'Bicicleta', 'Balón', 'Bisiesto', 'Brasil'];
myArrayV = ['Venezuela', 'Veneno', 'Voltaje'];
var chatC = new libAdd.myArrayC;
var chatB = new libAdd.myArrayB;
var chatV = new libAdd.myArrayV;
var sumChatC = new libIsEven.myArrayC;
var sumChatB = new libIsEven.myArrayB;
var sumChatV = new libIsEven.myArrayV;
if ((chatC.libAdd(true)) && (sumChatC.isEven(true))) {
    console.log(true);
}
else if ((chatB.libAdd(true)) && (sumChatB.isEven(true))) {
    console.log(true);
}
else if ((chatV.libAdd(true)) && (sumChatV.isEven(true))) {
    console.log(true);
}
else {
    console.log(false);
}
