// 1-masala

// let arr = ['olma', 'anor', 'shaftoli'];

// function findMaxLength(arr) {
//     let maxLength = arr[0];
//     arr.forEach(element => {
//         if (element >= maxLength) {
//             maxLength = element;
//         }
//     });
//     return maxLength;
// }
// console.log(findMaxLength(arr));

// 2-masala

// let arr = ['olma', 'anor', 'shaftoli'];

// function joinStr(arr) {
//     let res = arr.join(' ').replaceAll(' ', '').split();
//     return res;
// }
// console.log(joinStr(arr));

// 3-masala

// let arr = ['olma', 'anor', 'shaftoli'];

// function toUpperCase(arr) {
//     let newArr = [];
//     arr.forEach(element => {
//         newArr.push(element.toUpperCase())
//     });
//     return newArr;
// }
// console.log(toUpperCase(arr));

// 4-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function kopaytma(arr) {
//     let p = 1;
//     arr.forEach(element => {
//         p *= element;
//     });
//     return p;
// }
// console.log(kopaytma(arr));

// 5-masala

// function sortArray(arr) {
//     return arr.sort((a, b) => a - b);
// }

// 6-masala

// function reverseArray(arr) {
//     return arr.reverse();
// }

// 7-masala

// function indexArray(arr) {
//     return arr.map((_, index) => index);
// }

// 8-masala

// function findIndex(arr, num) {
//     return arr.indexOf(num);
// }

// 9-masala

// function addValueToArray(arr, value) {
//     return arr.map(item => item + value);
// }

// 10-masala

// function splitArray(arr) {
//     let positive = [];
//     let negative = [];
//     arr.forEach(item => {
//         if (item >= 0) {
//             positive.push(item);
//         } else {
//             negative.push(item);
//         }
//     });
//     return { positive, negative };
// }

// 11-masala

// function repeatArray(arr, n) {
//     let result = [];
//     for (let i = 0; i < n; i++) {
//         result = result.concat(arr);
//     }
//     return result;
// }

// 12-masala

// function arrayToStrings(arr) {
//     return arr.map(String);
// }

// 13-masala

// function evenIndexedElements(arr) {
//     return arr.filter((_, index) => index % 2 === 0);
// }

// 14-masala

// function countOddNumbers(arr) {
//     return arr.filter(item => item % 2 !== 0).length;
// }

// 15-masala

function minMaxArray(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { min: [min], max: [max] };
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(minMaxArray(arr));