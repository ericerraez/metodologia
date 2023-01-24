//Dado un vector de numero buscar si existen repetidos, almacenar el resultado en una variable boolean.
//`nums=[1,2,2,3,4]`
//`duplicado=true`
//`nums=[1,2,3,4]`
//`duplicado=false`

let nums = [1,2,2,3,4];
let duplicado = false;

for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
            duplicado = true;
            break;
        }
    }
    if(duplicado) break;
}
console.log(duplicado);