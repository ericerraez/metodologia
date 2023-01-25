//validar si el numero de la mitad del array es impar

let nums=[1,2,1,7,5,3,1]
let isPalindrome = true;

for(let i = 0; i < Math.floor(3 / 2); i++) {
  if (nums[i] !== nums[3 - i - 1]) {
    isPalindrome = false;
    break;
  }
}
console.log(isPalindrome);