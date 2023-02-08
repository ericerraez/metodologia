//Escribir un programa que obtenga el mes de la siguiente fecha: “2022-10-31”

function getMonth(date) {
    const d = new Date(date);
    return d.getMonth() + 1;
  }
  
  const date = '2022-10-31';
  console.log(getMonth(date)); 