"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
var day;
var month;
function zodiac(day, month) {
    if ((day > 19 && month === 'january') || (day < 19 && month === 'february')) {
        console.log('Tu signo del zodiaco es Acuario.');
    }
    else if ((day > 18 && month === 'february') || (day < 21 && month === 'march')) {
        console.log('Tu signo del zodiaco es Piscis.');
    }
    else if ((day > 20 && month === 'march') || (day < 20 && month === 'april')) {
        console.log('Tu signo del zodiaco es Aries.');
    }
    else if ((day > 19 && month === 'april') || (day < 21 && month === 'may')) {
        console.log('Tu signo del zodiaco es Tauro.');
    }
    else if ((day > 20 && month === 'may') || (day < 21 && month === 'june')) {
        console.log('Tu signo del zodiaco es Geminis.');
    }
    else if ((day > 20 && month === 'june') || (day < 23 && month === 'july')) {
        console.log('Tu signo del zodiaco es Cancer.');
    }
    else if ((day > 22 && month === 'july') || (day < 23 && month === 'august')) {
        console.log('Tu signo del zodiaco es Leo.');
    }
    else if ((day > 22 && month === 'august') || (day < 23 && month === 'september')) {
        console.log('Tu signo del zodiaco es Virgo.');
    }
    else if ((day > 22 && month === 'september') || (day < 23 && month === 'october')) {
        console.log('Tu signo del zodiaco es Libra.');
    }
    else if ((day > 22 && month === 'october') || (day < 22 && month === 'november')) {
        console.log('Tu signo del zodiaco es Escorpio.');
    }
    else if ((day > 21 && month === 'november') || (day < 22 && month === 'december')) {
        console.log('Tu signo del zodiaco es Sagitario.');
    }
    else {
        console.log('Tu signo de zodiaco es Capricornio.');
    }
    ;
}
zodiac(6, 'august');
// // Capricornio: 22 de diciembre al 19 de enero
// Acuario: 20 de enero al 18 de febrero
// Piscis: 19 de febrero al 20 de marzo
// Aries: 21 de marzo al 19 de abril
// Tauro: 20 de abril y al 20 de mayo
// Géminis: 21 de mayo al 20 de junio
// Cáncer: 21 de junio al 22 de julio
// Leo: 23 de julio al 22 de agosto
// Virgo: 23 de agosto al 22 de septiembre
// Libra: 23 de septiembre al 22 de octubre
// Escorpio: 23 de octubre al 21 de noviembre
// Sagitario: 22 de noviembre al 21 de diciembre.
// *.
var country;
function continent(country) {
    if (country === 'Spain' || country === 'France' || country === 'Germany' || country === 'Italy'
        || country === 'Belgium') {
        console.log('estás dentro del continente de:  Europe');
    }
    else if (country === 'Brazil' || country === 'Argentina' || country === 'Ecuador' || country === 'Colombia'
        || country === 'Mexico') {
        console.log('estás dentro del continente de:  South America');
    }
    else if (country === 'Moroco' || country === 'Algeria' || country === 'Cameroon' || country === 'South Africa'
        || country === 'Nigeria') {
        console.log('estás dentro del continente de:  Africa');
    }
    else if (country === 'Türkiye' || country === 'India' || country === 'China' || country === 'Japan'
        || country === 'Thailand') {
        console.log('estás dentro del continente de:  Asia');
    }
    else if (country === 'Washington' || country === 'Kansas' || country === 'Missouri' || country === 'Kentucky'
        || country === 'Montana') {
        console.log('estás dentro del continente de:  United States of America');
    }
}
continent('Missouri');
// *.
var number;
function isEven(number) {
    if (number % 2 === 0) {
        console.log('El numero es par');
    }
    else {
        console.log('El numero es impar');
    }
}
exports.isEven = isEven;
;
isEven(5);
// module.exports = (isEven)
