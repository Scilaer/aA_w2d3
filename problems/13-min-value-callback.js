/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

*******************************************************************************/

// let minValueCallback = function(arr, cb) {
//     let smallest = 1000
//     if (cb === undefined) {
//         for (let i = 0; i < arr.length; i++) {
//             let el = arr[i]

//             if (el < smallest) {
//                 smallest = el
//             }
//         }
//         return smallest
//     } 

//     for ( let i = 0; i < arr.length; i++ ) {
//         let el = arr[i]
      
//         if (el < smallest) {
//             smallest = el
//         }
//     }
//     return cb(smallest)
// };


let minValueCallback = function (arr, cb) {
    let smallest = 1000
    if (cb === undefined) return Math.min(...arr)
    return cb(Math.min(...arr))
};



















console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
