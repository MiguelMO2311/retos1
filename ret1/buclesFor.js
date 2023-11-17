"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var x;
var result;
var i;
function evenNumbers(num) {
    for (i = 0; i < num.length; i++) {
        if ((x[i] % 2 !== 0) && (x[i] <= num)) {
            result.push = result + num[i];
        }
    }
    return result;
}
evenNumbers(7);
console.log(result);
// Realizar una función que como parámetro de entrada reciba un array y como salida devuelva el array revertido. No se puede utilizar el método revert de la clase array La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr).
var myArray;
var res;
myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
res = [];
function myRevert(myArr) {
    for (var i_1 = myArr.length - 1; i_1 >= 0; i_1--) {
        res.push(myArr[i_1]);
    }
    return res;
}
myRevert(myArray);
console.log(res);
// Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)
var myArray1;
myArray1 = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet'];
function isRainbow(color) {
    for (var i_2 = 0; i_2 < color.length; i_2++) {
        if (myArray1 === color) {
            console.log('This color IS in the Rainbow');
        }
        else {
            console.log('This color ISN`T in the Rainbow');
        }
    }
    return color;
}
isRainbow(['cyan', 'purple', 'red']);
// Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array. La cabecera de la función tendrá el siguiente aspecto: function add(myWords)
var myWords = ['Pepe', 'Juan', 'tarde', 'Tormenta', 'Azul'];
function add(words) {
    for (var i_3 = 0; i_3 < myWords.length; i_3++) {
        var res_1 = 0;
        res_1 = res_1 + words.length;
    }
}
exports.add = add;
add(myWords);
console.log(myWords.length);
