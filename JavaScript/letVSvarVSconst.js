// Reassing
// var and let can be reassigned
// const cannot be reassigned

// redeclared
// var can be redecalred
// let and const cannot be redecalred


// Hosting -- Hosting is a behaviour of variables and functionsin which they will apper as they have moped to the top

// var is hoisted
// var let and const are hosited but let and const are hosted in a different zone called TDZ
// Var let and const are function scoped (because function is also a bolock of code)

// scope 
// -- function scope
// --block scope
// --global scope
// --lexical scope
// --scope chain

// var is function scoped
// let and const is not hoisted

// console.log(a);

// var a = 10;
// // let a = 10;

// console.log(a);

// abc();
// function abc() {
//     console.log("abc");
// }

// abc()


// a = 99;

// console.log(a);

// var a = 10;
// // let a = 10;

// console.log(a);

// abc();
// function abc() {
//     console.log("abc");
// }

// abc()


// console.log(a);
// var a = 99;
// console.log(a);


// function abc() {
//     a = 10;
//     console.log(a);
// }

// abc()


// console.log(a);


// var a = 10;

// console.log(a);


// function abc() {
//     console.log(a);
//     var a = 99;
// }

// abc()


// console.log(a);

// console.log(a);
// let a = 10;
// console.log(a);


// var a = 10;
// let b = 20;
// var z = 109;

// console.log(a);
// console.log(b);

// function one(){
//     console.log(a);
//     console.log(b);

//     function two (){
//         a = 99;
//         var b = 89;
//         let c = 90;
//         console.log(a);
//         console.log(b);
//         console.log(c);

//         function three(){
//             console.log(a);
//             console.log(b);
//             console.log(c);
//             console.log(z);
//             let d = 89;
//         }
//         three();
//         // console.log(d);
//     }
//     two();
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// one();



// console.log(d);
// var d = 99;
// console.log(d);
// function abc (){
//     d = 10;
//     console.log(d);
// }
// abc();
// console.log(d);



// let a = 10;
// {
//     // console.log(a);
//     let a= 99;
//     console.log(a);
// }
// console.log(a)



// let a = 10;
// var b = 10;
// {
//     console.log(b);
//     let a= 99;
//     var b = 199;
//     console.log(a);
// }
// console.log(b)



let a = 10;
console.log(b)
{
    console.log(b);
    let a= 99;
    var b = 199;
    console.log(a);
}
console.log(b)