// let arr1 = [1,2,3,4,5]
// let arr2 = ['a' , 'b' , 'c']

// let res = [...arr1 , ...arr2 , ...arr1 , ...arr2]

// console.log(res)



// let obj1 = {
//     name : "Abhay"
// }
// let obj2 = {
//     age : 22
// }
// let res ={...obj1 , ...obj2}
// console.log(res)



// Rest Parameter

// function sum (a, b){
//     return a + b
// };
// console.log(sum(2, 3))

// or

// function sum (a, b){
//     return a + b
// };
// let a = 2
// let b = 3
// console.log(sum(a, b))



function sum (...num){
    let arr = num;
    let sum = 0;
    for(let i=0; i<arr.length; i++ ){
        sum = sum + arr[i];
    };
    return sum;
}
console.log(sum(2,3,7))