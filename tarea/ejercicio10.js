//Convertir en un numero decimal un numero binario de 4 bits almacenado en un array.

//`binaryNumber=[0, 1, 0, 1]`


binaryNumber = [0, 1, 0, 1];
decimalNumber = parseInt(binaryNumber.join(""), 2);
console.log(decimalNumber);