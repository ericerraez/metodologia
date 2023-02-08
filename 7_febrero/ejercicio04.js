//Escribir un programa que obtenga las iniciales de un jugador de futbol, 
//sabiendo que se usa iniciales y numero. Ejemplo CR-7, LM-10, LFS-10, AV-25

function getInitials(player) {
    const [name, number] = player.split('-');
    const initials = name.split('').map((c, i) => i === 0 ? c : c.toUpperCase()).join('');
    return `${initials}-${number}`;
  }
  
  const player = 'LM-10';
  console.log(getInitials(player));