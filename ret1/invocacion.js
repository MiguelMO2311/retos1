"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Invocando a la función isEven y a la función add creadas en los retos anteriores indicar si es
// par o impar la suma de los caracteres de cada uno de los siguientes arrays:
// Para ello tendrás que exportar dichas funciones en los ficheros correspondientes. ok
// También tendrás que importar dichos ficheros en el fichero actual.
// // const myAdd = require("./buclesFor");
// const myIsEven = require("./condicionales");
var buclesFor_1 = require("./buclesFor");
var condicionales_1 = require("./condicionales");
var myArrayC = ['Casa', 'Coche', 'Ciudad', 'Cesta'];
var myArrayB = ['Barco', 'Baca', 'Bicicleta', 'Balón', 'Bisiesto', 'Brasil'];
var myArrayV = ['Venezuela', 'Veneno', 'Voltaje'];
var nChatC = (0, buclesFor_1.add)(myArrayC);
var nChatB = (0, buclesFor_1.add)(myArrayB);
var nChatV = (0, buclesFor_1.add)(myArrayV);
(0, condicionales_1.isEven)(nChatC);
(0, condicionales_1.isEven)(nChatB);
(0, condicionales_1.isEven)(nChatV);
