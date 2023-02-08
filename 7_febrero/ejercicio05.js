//Escribir un programa para obtener el nombre de usuario de un correo electrónico.

function getUsername(email) {
    return email.split('@')[0];
  }
  
  const email = 'juanito22@gmail.com';
  console.log(getUsername(email));