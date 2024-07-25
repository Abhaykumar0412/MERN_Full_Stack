/*let greet = function(){
    console.log("Greet called")
}
greet();*/



/*greet();
var greet = function(){
    console.log("Greet called")
}
greet();*/



/*let sum = function (a , b){
    return a + b;
}
let a = 2;
let b = 3;
console.log(sum(a,b));*/



/*let sum = function (a , b){
    return a + b;
}
let a = function(){
    return 1;
};
let b = 3;
console.log(sum(a,b));*/


// Pure Functions = Map, Filter, Reduce

// Higher order function (HOF)

// ForEach
// Map
// Filter
// Reduce


// ForEach

/*let arr = [10,20,30,40,50];
arr.forEach(function(ele, idx, arr){
    console.log(ele, idx)
})*/

// or

/*let arr = [10,20,30,40,50];
let fn = function(ele, idx, arr){
    console.log(ele, idx)
}
arr.forEach(fn)*/



/*let arr = [10,20,30,40,50];
let fn = function(ele, idx, arr){
    arr[idx] = ele * 2;
}
arr.forEach(fn)
console.log(arr);*/


// Map

/*let arr = [10,20,30,40,50];
let result = arr.map (function(ele, idx, arr){
    return ele * ele
});
console.log("arr", arr)
console.log("result", result)*/

// or

/*let arr = [10,20,30,40,50];
let result = arr.map (function(ele, idx, arr){
    // return ele * ele
});
// console.log("arr", arr)
console.log("result", result)*/


// Filter

/*let arr = [3,2,1,4,6,0,9];
let result = arr.filter(function(ele){
    return ele%2 == 0;
})
console.log(result)*/


// Reduce

/*let arr = [1,3,2,9,4,5,0,3];
let res = arr.reduce(function(acc , curr){
    return acc + curr;
})
console.log(res)*/

// or

/*let arr = [1,3,2,9,4,5,0,3];
let res = arr.reduce(function(acc , curr){
    return acc + curr;
},0)
console.log(res)*/



// THIS IS A QUESTION
// CREATE A ARRAY SQUARE THE ARRAY ELEMENT THEN FILTER THE EVEN ELEMENT AND ADD THE EVEN ELEMENT?

/*let arr = [4,6,1,9,2,3];
let ans = arr.map(function(ele){
    return ele * ele;
})
let ans2 = ans.filter(function(ele){
    return ele%2 == 0;
})
let ans3 = ans2.reduce(function(acc , ele){
    return acc + ele;
})
console.log(ans3)*/

// or

/*let arr = [4, 6, 1, 9, 2, 3];
let ans = arr
.map(function (ele) { 
    return ele * ele; 
})
.filter(function (ele) { 
    return ele % 2 == 0; 
})
.reduce(function (acc, ele) { 
    return acc + ele; })

console.log(ans)*/

// or

/*let arr = [4,6,1,9,2,3];
let sum  = 0
for (let i=0; i<arr.length; i++){
    let ele = arr[i] * arr[i];
    if (ele%2 == 0){
        sum +=ele;
    };
}
console.log(sum)*/



// IIFE

/*function abc( ){
    console.log("abc")
}
abc()*/

// or

/*(function abc( ){
    console.log("abc")
})()*/

// or

/*let arr = [4, 6, 1, 9, 2, 3];
let res = (function () {
    return arr
        .map(function (ele) {
            return ele * ele;
        })
        .filter(function (ele) {
            return ele % 2 == 0;
        })
        .reduce(function (acc, ele) {
            return acc + ele;
        })
})()*/
