// Shallow Copy

/*let obj = {
    name :'Abhay',
    age : 23,
    address : {
        city : "Noida",
        state : "UP"
    }
}
let copyobj = obj;
console.log("og object", obj)
console.log("copyobj", copyobj)*/

// or

/*let obj = {
    name :'Abhay',
    age : 23,
    address : {
        city : "Noida",
        state : "UP"
    }
}
let copyobj = obj;    //shallow copy

copyobj.age = 99;

console.log("og object", obj)
console.log("copyobj", copyobj)*/



// Deep Copy

/*let obj = {
    name :'Abhay',
    age : 23,
    address : {
        city : "Noida",
        state : "UP"
    }
}
let copyobj = JSON.parse(JSON.stringify(obj));
console.log("og object", obj)
console.log("copyobj", copyobj)*/

// or

/*let obj = {
    name :'Abhay',
    age : 23,
    address : {
        city : "Noida",
        state : "UP"
    }
}
let copyobj = JSON.parse(JSON.stringify(obj));  //Deep Copy
copyobj.age = 99;
console.log("og object", obj)
console.log("copyobj", copyobj)*/



/*let obj = {
    name :'Abhay',
    age : 23,
    address : {
        city : "Noida",
        state : "UP"
    }
}
let copyobj = {...obj}; //combination of shallow and deep copy
copyobj.address.city = 99;
console.log("og object", obj)
console.log("copyobj", copyobj)*/