const DATE = require( './formater_date');

let x = new DATE('now')

console.log(x.formatString('fullYear_ru',1,'.'));