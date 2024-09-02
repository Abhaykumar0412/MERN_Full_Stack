// function sum (a , b){
//     return a + b
// }



//arrow function or big fat arrow function

// let sum = (a , b)=>{
//     return a+b
// }
// console.log(sum(2, 3))



// let sum = (a,b) => a +b;
// console.log(sum(2, 3))



// let sum = a => a;
// console.log(sum(2))



// what Different b/w arrow and normal fumction?

// 1) Syntax
// 2) This Keyword

//refer to the same obj

// let obj = {
//     name : "Abhay",
//     age : 23,
//     getDetails : function(){
//         console.log(this.name, this.age)
//     }
// }
// obj.getDetails()



// let obj = {
//     name : "Abhay",
//     age : 23,
//     getDetails : function(){
//         console.log(this.name, this.age)
//     },
//     getDetails2 : () =>{
//         console.log(this.name, this.age)
//     }
// }
// obj.getDetails2()