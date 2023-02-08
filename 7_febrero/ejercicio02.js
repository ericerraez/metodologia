//Escribir un programa que permita obtener el numero de piso de un edificio de oficinas donde el formato de numeración de las oficinas es:
// “01.24” lo que significa piso 1 oficina 24.

function getFloorNumber(office) {
    return parseInt(office.split('.')[0], 10);
  }
  
  const office = '01.24';
  console.log(getFloorNumber(office)); 