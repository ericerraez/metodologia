//El mismo ***Ejercicio 01***  pero considerar que las combinaciones no se repitan, 
//es decir, las salida seria:

let nums = [0, 2, 4, 8];
let i = [0, 1, 2, 3];

for (let j = 0; j < i.length; j++) {
    let line = "";
    for (let k = j; k < nums.length; k++) {
        line += i[j] + "" + nums[k] + " ";
    }
    console.log(line);
}