// Retos de Bucles While
// 2. Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)
var myNum;
var i;
myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function hasEven(myNums) {
    i = 0;
    while (i < myNum.length - 1) {
        i++;
        if ((myNum[i] % 2) == 0) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}
hasEven(myNum);
// / 3. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)
var myArrNames;
var j;
myArrNames = ['Miguel', 'Pedro', 'Jorge', 'Rubén', 'Jose'];
j = 0;
function startWithM(myNames) {
    while (j < myArrNames.length) {
        j++;
        if ((myArrNames[0][0].charAt(0) == 'M') && (myArrNames[1][0].charAt(0) == 'M') && (myArrNames[2][0].charAt(0) == 'M')
            && (myArrNames[3][0].charAt(0) == 'M') && (myArrNames[4][0].charAt(0) == 'M')) {
            console.log('true');
        }
        else {
            console.log('false');
        }
    }
}
startWithM(myArrNames);
