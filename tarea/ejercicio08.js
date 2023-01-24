//Invertir el orden de una cadena de texto almacenada en una array, , considerar que el tamaño de la cadena es un numero imparworld=
//[’s’,’o’,’n’,’a’,’c’,’n’,’e’,’u’,’c’]

let world = ['s','o','n','a','c','n','e','u','c'];

for (let i = 0; i < (world.length - 1) / 2; i++) {
    let aux = world[i];
    world[i] = world[world.length - i - 1];
    world[world.length - i - 1] = aux;
}
console.log(world);