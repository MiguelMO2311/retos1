// Retos de Bucles While
// 2. Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)

let mNum:number[];
mNum = [1,2,3,4,5,6,7,8,9]
function hasEven(myNums):void{
let i= 0;
while( i< mNum.length-1){
i ++;
if ((mNum[i]%2) == 0){
console.log (true)
} else {
console.log(false)}
}
}
hasEven (mNum)



// / 3. Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)

let myArrNames:string[];
let j:number;

myArrNames = ['Miguel', 'Pedro', 'Jorge', 'Rubén', 'Jose']
j = 0
function startWithM(myNames):void{

while (j < myArrNames.length){
j ++;
if ((myArrNames[0][0].charAt(0) == 'M') && (myArrNames[1][0].charAt(0) == 'M') && (myArrNames[2][0].charAt(0) == 'M')
 && (myArrNames[3][0].charAt(0) =='M') && (myArrNames[4][0].charAt (0) == 'M' )){
console.log ('true')
} else {
console.log ('false')
}
}
}
startWithM(myArrNames)

