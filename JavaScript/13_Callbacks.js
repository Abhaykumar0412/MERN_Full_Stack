// function calc (operation , a, b){
//     return operation(a, b);
// }

// function sum(a, b){
//     return a + b;
// }

// let ans = calc (sum, 2, 3);
// console.log(ans)



// function calc (operation , a, b){
//     return operation(a, b);
// }

// function sub(a, b){
//     return a - b;
// }

// let ans = calc (sub, 2, 3);
// console.log(ans)



//Maggi ---2 sec

// function makemaggi(){
//     setTimeout(function(){
//         console.log("Maggi is ready")
//     }, 2000)
// }
// console.log("Start");
// makemaggi()
// console.log("end")



//sandwich --> bakeTheBread --> applySauces --> Grill

// function bakeTheBread(raw, cb){
//     setTimeout(function(){
//         console.log("Bread is bake")
//         cb()
//     }, 2000)
// }
// function applySauces(Bread, cb){
//     setTimeout(function(){
//         console.log("Sauces Applyed")
//         cb()
//     }, 2000)
// }
// function Grill(Bread){
//     setTimeout(function(){
//         console.log("Sandwitch is ready")
//     }, 2000)
// }
// bakeTheBread()                //incomplet



//CallBack Hell

function bakeTheBread(raw, cb) {
    setTimeout(function () {
        console.log("Bread is bake")
        setTimeout(function () {
            console.log("Sauces Applyed")
            setTimeout(function () {
                console.log("Sandwitch is ready")
            }, 2000)
        }, 2000)
    }, 2000)
}
bakeTheBread("Bread")               //This is note a correct way to write.