//concatenarlos con  cada elemento  posteior del array

let numss = [0, 2, 4, 8];
let i = [0, 1, 2, 3];

for (let j = 0; j < i.length; j++) {
    let line = "";
    for (let k = 0; k < nums.length; k++) {
        line += i[j] + "" + nums[k] + " ";
    }
    console.log(line);
}