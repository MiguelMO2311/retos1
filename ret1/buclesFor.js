"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var x;
function evenNumbers(num) {
    x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var i = 0; i < x.length; i++) {
        if ((x[i] % 2 !== 0) && (x[i] <= num)) {
            console.log(x[i]);
        }
    }
}
evenNumbers(7);
// Realizar una función que como parámetro de entrada reciba un array y como salida devuelva el array revertido. No se puede utilizar el método revert de la clase array La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr).
var myArray;
var res;
myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
res = [];
function myRevert(myArr) {
    for (var i = myArr.length - 1; i >= 0; i--) {
        res.push(myArr[i]);
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
    for (var i = 0; i < myArray1.length; i++) {
        if (color == myArray1[i]) {
            console.log('This color IS in the Rainbow');
        }
        else {
            console.log('This color ISN`T in the Rainbow');
        }
    }
}
isRainbow('cyan');
// Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array. La cabecera de la función tendrá el siguiente aspecto: function add(myWords)
var myWords;
myWords = 'Una tarde parda y fría de invierno. Los colegiales estudian. Monotonía de lluvia tras los cristales…';
function add(myWords) {
    return myWords.length;
}
exports.add = add;
add(myWords);
console.log(myWords.length);
