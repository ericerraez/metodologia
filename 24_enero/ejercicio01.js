//validar si el numero de la mitad del array es impar

let nums=[1,3,5,7,5,3,1]
let isPalindrome = true;

for(let i = 0; i < Math.floor(nums.length / 2); i++) {
console.log (nums[i])
console.log (nums[nums.length - i - 1])
  if (nums[i] !== nums[nums.length - i - 1]) {
    isPalindrome = false;
  }
}
console.log(isPalindrome);
