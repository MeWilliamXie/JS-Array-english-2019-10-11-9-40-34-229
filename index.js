/*
 * @Author: WilliamXie 854933448@qq.com
 * @Date: 2022-06-07 16:14:42
 * @LastEditors: WilliamXie 854933448@qq.com
 * @LastEditTime: 2022-06-07 16:50:04
 * @FilePath: \WEB\OOCL\day6-10\JS-Array-english-2019-10-11-9-40-34-229\index.js
 */
// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array);  // false
console.log(b instanceof Array);  // true

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (let i = 0; i < a.length; i++) {
  a[i] *= 2
}
console.log(a);  // [2,4,6,8,10]


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(' '));  // Red Green White Black
console.log(colors.join('+'));  // Red+Green+White+Black
console.log(colors.join(','));  // Red,Green,White,Black


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort((a, b) => b - a)); // [10,8,5,4,1]


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function getMostFrequent(arr) {
  let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    if (arr2.some(v => v.value == arr[i])) arr2.find(v => v.value == arr[i]).count++
    else arr2.push({ value: arr[i], count: 1 })
  }
  let most = arr2[0] || undefined
  arr2.forEach(v => {
    if (v.count > most.count) most = v
  })
  return most.value
}
console.log(getMostFrequent(a));  // a