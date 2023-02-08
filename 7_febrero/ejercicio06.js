//Escribir un programa que obtenga el nombre de usuario de facebook desde la url.


function getFacebookUsername(direccion) {
    const path = new URL(direccion).pathname;
    return path.split('/')[1];
  }
  
  const direccion = 'https://www.facebook.com/juanito';
  console.log(getFacebookUsername(direccion)); 