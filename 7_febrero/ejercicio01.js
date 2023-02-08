//Escribir un programa de extraiga las parte numérica de una placa de un auto

function extractPlateNumber(plate) {
    return plate.match(/\d+/g).join('');
  }
  
  const plate = 'ABC-1234';
  console.log(extractPlateNumber(plate)); 

  