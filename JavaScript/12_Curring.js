// function sum(a, b, c){
//     return a + b + c;
// }
// console.log(sum(12,3,4))



let sum = function(a){
    return function(b){
        return a + b;
    }
}
let add100 = sum(100);
console.log(add100(200))