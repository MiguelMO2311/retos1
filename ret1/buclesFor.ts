
let x: number[];
let result;
let i:number

function evenNumbers(num): void {
    for (i = 0; i < num.length; i++) {
        if ((x[i] % 2 !== 0) && (x[i] <= num)) {
            result.push = result+ num[i]
        }
    }
    return result
}
evenNumbers(7)
console.log (result)



// Realizar una función que como parámetro de entrada reciba un array y como salida devuelva el array revertido. No se puede utilizar el método revert de la clase array La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr).

let myArray: number[];
let res: number[];
myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
res = [];

function myRevert(myArr): number[] {

    for (let i = myArr.length - 1; i >= 0; i--) {
        res.push(myArr[i])
    }
    return res
}

myRevert(myArray);
console.log(res)

// Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)
let myArray1: string[];

myArray1 = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']

function isRainbow(color): string {

    for (let i = 0; i < color.length; i++) {
        if (myArray1 === color) {
            console.log('This color IS in the Rainbow')
        } else {
            console.log('This color ISN`T in the Rainbow')
            
        }
    }
return color;
}
isRainbow(['cyan','purple','red']);

// Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array. La cabecera de la función tendrá el siguiente aspecto: function add(myWords)


let myWords = ['Pepe', 'Juan', 'tarde', 'Tormenta', 'Azul']

export function add(words): void {
    for (let i=0; i< myWords.length;i++){
        let res =0
    res = res + words.length
              }
    }
add(myWords);
console.log(myWords.length)