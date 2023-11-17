// Retos de Bucles While
// 2. Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)
function hasEven(myNums) {
    var i = 0;
    while (i <= myNums.length - 1) {
        if ((myNums[i] % 2) == 0) {
            console.log(true);
        }
        else {
            console.log(false);
        }
        i++;
    }
}
hasEven([1, 2, 3, 4, 5, 6, 7, 8]);
// / 3. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)
var myArrNames;
var j;
myArrNames = ['Miguel', 'Pedro', 'Jorge', 'Rubén', 'Jose'];
j = 0;
function startWithM(myNames) {
    while (j < myArrNames.length) {
        if ((myArrNames[j].charAt(0) !== 'M')) {
            console.log('false');
        }
        else {
            console.log('true');
        }
        j++;
    }
}
startWithM(myArrNames);
