//Invertir el orden de una cadena de texto almacenada en una array, considerar que el tamaño de la cadena es un numero par. 
//world=[’o’,’ñ’,’e’’l’,’i’,’u’,’q’,’a’,’y’,’a’,’u’,’g’]

let world = ['o','ñ','e','l','i','u','q','a','y','a','u','g'];

for (let i = 0; i < world.length / 2; i++) {
    let aux = world[i];
    world[i] = world[world.length - i - 1];
    world[world.length - i - 1] = aux;
}
console.log(world);