//Programa que emule un cajero automatico, usando Do-While, 3 intentos aparece un mensaje de bloqueo

let attempts = 0;
let balance = 1000;
let pin = 1234;

do {
    let pin_input = parseInt(prompt("Ingresa tu PIN: "));
    attempts++;
    if (pin_input === pin) {
        console.log("Acceso permitido.");
        while (true) {
        
            } 
    } else {
        console.log("PIN incorrecto. Te quedan " + (3 - attempts) + " intentos.");
    }
} while (attempts < 3);

if (attempts === 3) {
    console.log("Acceso denegado. Tu cuenta ha sido bloqueada.");
}