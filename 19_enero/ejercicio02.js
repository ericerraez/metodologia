//numero perfecto : ingresar un numero y verificar si es perfecto
function isPerfect(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}

let n= Number(prompt("Ingresa un número"));

if (isPerfect(n)) {
    console.log(n + " Es un número perfecto");
} else {
    console.log(n + " No es un número perfecto");
}