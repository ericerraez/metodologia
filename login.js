//validar login

let username = "eric12";
let password = "password123";

let inputUsername = "eric12";
let inputPassword = "password123";

if (inputUsername === username && inputPassword === password) {
  console.log("Login válido, bienvenido!");
} else {
  console.log("Usuario o contraseña incorrectos, por favor inténtelo de nuevo.");
}