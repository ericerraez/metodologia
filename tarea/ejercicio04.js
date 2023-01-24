//A partir del array imprimir el índice de los elementos que sumados sean igual a la variable x.


let nums = [2, 3, 6, 5, 0];
let x = 7;

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == x) {
            console.log("Los índices " + i + " y " + j + " suman " + x);
        }
    }
}