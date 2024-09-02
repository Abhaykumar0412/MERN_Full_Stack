// let obj1 = {
//     name: "saurabh",
//     age: 24,
//     getDetails: function () {
//         console.log(this.name, this.age)
//     }
// }


// let obj2 = {
//     name: "Abhay",
//     age: 23,
// }

// obj1.getDetails.call(obj2)



// function getDetails(){
//     console.log(this.name , this.age)
// }

// let obj1 = {
//     name: "saurabh",
//     age: 24,
//     getDetails: function () {
//         console.log(this.name, this.age)
//     }
// }


// let obj2 = {
//     name: "Abhay",
//     age: 23,
// }

// obj1.getDetails.call(obj1)



//call ---- extra parameter are passed as , comma sepreted

// function getDetails(gender , fit){
//     console.log(this.name , this.age, gender, fit)
// }

// let obj1 = {
//     name: "saurabh",
//     age: 24,
//     getDetails: function () {
//         console.log(this.name, this.age)
//     }
// }


// let obj2 = {
//     name: "Abhay",
//     age: 23,
// }

// getDetails.call(obj1, 'male', 'yes')



// apply ---- extra parameter are passed as a array

// function getDetails(gender , fit){
//     console.log(this.name , this.age, gender, fit)
// }

// let obj1 = {
//     name: "saurabh",
//     age: 24,
//     getDetails: function () {
//         console.log(this.name, this.age)
//     }
// }


// let obj2 = {
//     name: "Abhay",
//     age: 23,
// }

// getDetails.apply(obj1, ['male', 'yes'])



//bind ---- it gives a the refrence of resultant function and extra prameter are passed as  , comma sepreted

function getDetails(gender , fit){
    console.log(this.name , this.age, gender, fit)
}

let obj1 = {
    name: "saurabh",
    age: 24,
    getDetails: function () {
        console.log(this.name, this.age)
    }
}


let obj2 = {
    name: "Abhay",
    age: 23,
}

let fn = getDetails.bind(obj1, 'male', 'yes')
fn()