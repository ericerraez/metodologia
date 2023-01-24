//A partir de una valor `t` y un valor `x` que son ingresados por el usuarios, donde `t` es el tamaño del vector. 
//Llenar los elementos con múltiplos de `x`

let t = 5;
let x = 3;
let v = [];

for(let i = 0; i < t; i++) {
    v[i] = (i+1) * x;
}
console.log(v);