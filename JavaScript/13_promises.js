// function makeMaggi(raw){
//     let maggiPromise = new Promise((resolve , reject) =>{
//         if (raw){
//             setTimeout(() => {resolve("maggi is ready")},2000)
//         }else{
//             reject ("Not avbilable")
//         }
//     })
//     return maggiPromise

// }
// console.log("Start")

// makeMaggi("maggi").then((result) =>{
//     console.log(result)
// }).catch((result) => {                 //result error
//     console.log(result)
// })

// console.log("End")




// function bakeBread(raw) {
//     return new Promise((resolve, reject) => {
//         if (raw) {
//             setTimeout(() => { resolve("Baking is done") }, 2000)
//         } else {
//             reject("error 1")
//         }
//     })
// }
// function addSauces(raw) {
//     return new Promise((resolve, reject) => {
//         if (raw) {
//             setTimeout(() => { resolve("sauced are added") }, 2000)
//         } else {
//             reject("error 2")
//         }
//     })
// }
// function grill(raw) {
//     return new Promise((resolve, reject) => {
//         if (raw) {
//             setTimeout(() => { resolve("sandwich is ready") }, 2000)
//         } else {
//             reject("error 3")
//         }
//     })
// }
// bakeBread("bread").then((bakeBread) => {
//     console.log("Baking is done", bakeBread);
//     return addSauces(bakeBread);
// })
//     .then((saucedBread) => {
//         console.log("Saucing is done", saucedBread);
//         return grill(saucedBread);
//     })
//     .then((sandwich) => {
//         console.log("sandwich is ready", sandwich);
//     })
//     .catch((err) => {
//         console.log(err);
//     });




// function bakeBread(raw) {
//     return new Promise((resolve, reject) => {
//         if (raw) {
//             setTimeout(() => { resolve("Baking is done") }, 2000)
//         } else {
//             reject("error 1")
//         }
//     })
// }
// function addSauces(raw) {
//     return new Promise((resolve, reject) => {
//         if (raw) {
//             setTimeout(() => { resolve("sauced are added") }, 2000)
//         } else {
//             reject("error 2")
//         }
//     })
// }
// function grill(raw) {
//     return new Promise((resolve, reject) => {
//         if (raw) {
//             setTimeout(() => { resolve("sandwich is ready") }, 2000)
//         } else {
//             reject("error 3")
//         }
//     })
// }
// bakeBread("bread")
//     .then((bakeBread) => {
//         console.log("Baking is done", bakeBread);
//         return addSauces(bakeBread);
//     })
// .then((saucedBread) => {
//     console.log("Saucing is done", saucedBread);
//     return grill();
// })
// .then((sandwich) => {
//     console.log("sandwich is ready", sandwich);
// })
// .catch((err) => {
//     console.log(err);
// });




// function bakeBread(raw) {
//     return new Promise((resolve, reject) => {
//         if (raw) {
//             setTimeout(() => { resolve("Baking is done") }, 2000)
//         } else {
//             reject("error 1")
//         }
//     })
// }
// function addSauces(raw) {
//     return new Promise((resolve, reject) => {
//         if (raw) {
//             setTimeout(() => { resolve("sauced are added") }, 2000)
//         } else {
//             reject("error 2")
//         }
//     })
// }
// function grill(raw) {
//     return new Promise((resolve, reject) => {
//         if (raw) {
//             setTimeout(() => { resolve("sandwich is ready") }, 2000)
//         } else {
//             reject("error 3")
//         }
//     })
// }
// console.log(
//     bakeBread("bread")
//         .then((bakeBread) => {
//             console.log("Baking is done", bakeBread);
//             return addSauces(bakeBread);
//         })
// )



//async / await



function bakeBread(raw) {
    return new Promise((resolve, reject) => {
        if (raw) {
            setTimeout(() => { resolve("Baking is done") }, 2000)
        } else {
            reject("error 1")
        }
    })
}
function addSauces(raw) {
    return new Promise((resolve, reject) => {
        if (raw) {
            setTimeout(() => { resolve("sauced are added") }, 2000)
        } else {
            reject("error 2")
        }
    })
}
function grill(raw) {
    return new Promise((resolve, reject) => {
        if (raw) {
            setTimeout(() => { resolve("sandwich is ready") }, 2000)
        } else {
            reject("error 3")
        }
    })
}
async function makeSandwich() {
    let bakedBread = await bakeBread("Bread");
    console.log(bakedBread)
    let saucedBread = await addSauces(bakeBread);
    console.log (saucedBread)
    let sandwich = await grill(saucedBread)
    console.log(sandwich)
}
makeSandwich()